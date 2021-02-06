import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
  console.log(credentials);
  try {
    const { data } = await axios.post(
      'https://goit-phonebook-api.herokuapp.com/users/signup',
      credentials,
    );
    return data;
  } catch (error) {
    alert('ошибка регистрации', error);
  }
});

export { register };
