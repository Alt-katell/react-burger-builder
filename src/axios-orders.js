import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-47ed1.firebaseio.com/'
});

export default instance;
