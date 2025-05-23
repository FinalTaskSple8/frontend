import axios from 'axios';
import tokenManager from '@/commons/utils/token';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const deleteRoom = (id) => {
  const { getToken } = tokenManager();
  const token = getToken();

  return axios.post(`${backendUrl}/call/room/delete`, { id }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default deleteRoom;