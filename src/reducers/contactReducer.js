import {
    FETCH_CONTACTS_SUCCESS,
    ADD_CONTACT_SUCCESS,
    UPDATE_CONTACT_SUCCESS,
    DELETE_CONTACT_SUCCESS,
  } from '../actions/contactActions';
  
  const initialState = [];
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CONTACTS_SUCCESS:
        return action.payload;
      case ADD_CONTACT_SUCCESS:
        return [...state, action.payload];
      case UPDATE_CONTACT_SUCCESS:
        return state.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
      case DELETE_CONTACT_SUCCESS:
        return state.filter((contact) => contact.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default contactReducer;
  