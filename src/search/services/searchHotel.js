import axios from 'axios';
import environment from '@/commons/utils/environment';

const searchHotel = (data = {}) => {
  let body = data;

  return axios.post(`${environment.rootApi}/call/hotel/search`, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default searchHotel;