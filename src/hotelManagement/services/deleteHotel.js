import axios from 'axios';
import tokenManager from '@/commons/utils/token';

const deleteHotel = (id) => {
  const { getToken } = tokenManager();
  const token = getToken();

  return axios.post('http://localhost:7776/call/hotel/delete', { id }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default deleteHotel;