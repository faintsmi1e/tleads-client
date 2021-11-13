import axios from 'axios';
import path from 'path';
const BACK_URL = 'https://9969-94-19-75-204.ngrok.io/';

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