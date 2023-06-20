import api from '../services/api';

// Action Types
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
export const UPDATE_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS';
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';

// Action Creators
export const fetchContactsSuccess = (contacts) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: contacts,
});

export const addContactSuccess = (contact) => ({
  type: ADD_CONTACT_SUCCESS,
  payload: contact,
});

export const updateContactSuccess = (contact) => ({
  type: UPDATE_CONTACT_SUCCESS,
  payload: contact,
});

export const deleteContactSuccess = (contactId) => ({
  type: DELETE_CONTACT_SUCCESS,
  payload: contactId,
});

// Thunk Actions
export const fetchContacts = () => {
  return async (dispatch) => {
    try {
      const response = await api.get('/contact');
    //   console.log(response);
      dispatch(fetchContactsSuccess(response.data.data));
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };
};

export const addContact = (contact) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/contact', contact);
      dispatch(addContactSuccess(response.data));
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };
};

export const updateContact = (contact) => {
  return async (dispatch) => {
    try {
      const response = await api.put(`/contact/${contact.id}`, contact);
      dispatch(updateContactSuccess(response.data));
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };
};

export const deleteContact = (contactId) => {
  return async (dispatch) => {
    try {
      await api.delete(`/contact/${contactId}`);
      dispatch(deleteContactSuccess(contactId));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };
};
