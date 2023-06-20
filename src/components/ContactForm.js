import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../actions/contactActions';
import { TextField, Button } from '@mui/material';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState('');

  const handleAddContact = () => {
    const newContact = {
      firstName: firstname,
      lastName: lastname,
      age,
      photo
    };
    dispatch(addContact(newContact));
    setFirstname('');
    setLastname('');
    setAge('');
    setPhoto('')
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <form>
        <TextField
          label="First Name"
          variant="outlined"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          variant="outlined"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Age"
          variant="outlined"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Url Photo"
          variant="outlined"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleAddContact}>
          Add
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
