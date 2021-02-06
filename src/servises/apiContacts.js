import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

// GET all contacts
async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

// POST contact
async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

// delete contact by ID
async function delContact(contactId) {
  await axios.delete(`/contacts/${contactId}`);
  return contactId;
}

export { fetchContacts, addContact, delContact };
