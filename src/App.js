import React from 'react';
import { Provider } from 'react-redux';
import store from './reducers';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Contact App</h1>
        <ContactForm />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
