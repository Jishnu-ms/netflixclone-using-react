import axios from 'axios'
import {} from './constants/constants'
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
  });

  export default instance
