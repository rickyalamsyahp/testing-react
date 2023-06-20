import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  fetchContacts,
  addContact,
  deleteContact,
  FETCH_CONTACTS_SUCCESS,
  ADD_CONTACT_SUCCESS,
  DELETE_CONTACT_SUCCESS,
} from '../actions/contactActions';

const mockStore = configureMockStore([thunk]);
const mockAxios = new MockAdapter(axios);

describe('contactActions', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('fetches contacts and dispatches FETCH_CONTACTS_SUCCESS', async () => {
    const store = mockStore();
    const mockContacts = [
      { id: 1, firstname: 'John', lastname: 'Doe', age: 30, photo: 'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550' },
      { id: 2, firstname: 'Jane', lastname: 'Smith', age: 25, photo: 'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550' },
    ];

    mockAxios.onGet('/contact').reply(200, mockContacts);

    await store.dispatch(fetchContacts());

    const actions = store.getActions();

    expect(actions[0].type).toBe(FETCH_CONTACTS_SUCCESS);
    expect(actions[0].payload).toEqual(mockContacts);
  });

  it('adds a contact and dispatches ADD_CONTACT_SUCCESS', async () => {
    const store = mockStore();
    const newContact = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      photo: 'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550'
    };
    const responseContact = {
      id: 1,
      ...newContact,
    };

    mockAxios.onPost('/contact', newContact).reply(201, responseContact);

    await store.dispatch(addContact(newContact));

    const actions = store.getActions();

    expect(actions[0].type).toBe(ADD_CONTACT_SUCCESS);
    expect(actions[0].payload).toEqual(responseContact);
  });

  it('deletes a contact and dispatches DELETE_CONTACT_SUCCESS', async () => {
    const store = mockStore();
    const contactId = 1;

    mockAxios.onDelete(`/contact/${contactId}`).reply(204);

    await store.dispatch(deleteContact(contactId));

    const actions = store.getActions();

    expect(actions[0].type).toBe(DELETE_CONTACT_SUCCESS);
    expect(actions[0].payload).toEqual(contactId);
  });
});
