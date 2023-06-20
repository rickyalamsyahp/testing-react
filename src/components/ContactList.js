import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../actions/contactActions';
import { FaTrash } from 'react-icons/fa';
import '../App.css'

const ContactList = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h2>Contact List</h2>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Photo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                {contact.firstName} {contact.lastName}
              </td>
              <td>{contact.age}</td>
              <td>
                {" "}
                <img
                  className="contact-photo"
                  src={contact.photo}
                  alt="Contact"
                />
              </td>
              <td>
                <FaTrash
                  className="delete-icon"
                  onClick={() => handleDeleteContact(contact.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
