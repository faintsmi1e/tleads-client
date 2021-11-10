import axios from 'axios';
import path from 'path';
const BACK_URL = 'http://localhost:5000/';

export default class EventService {
  static async getAll(query) {
    if(query) {
      const { data } = await axios.get(BACK_URL + path.join('api', 'leads',`?query=${query}`));
      return data._embedded;
    } else {
      const { data } = await axios.get(BACK_URL + path.join('api', 'leads'));
    return data._embedded;
    }
    
  }
  
}