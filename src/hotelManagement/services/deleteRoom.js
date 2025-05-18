import axios from 'axios';
import tokenManager from '@/commons/utils/token';

const deleteRoom = (id) => {
  const { getToken } = tokenManager();
  const token = getToken();

  return axios.post('http://localhost:7776/call/room/delete', { id }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default deleteRoom;