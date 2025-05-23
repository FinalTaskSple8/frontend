import axios from 'axios';
import tokenManager from '@/commons/utils/token';
import environment from '@/commons/utils/environment';
import { notifyError } from '@/commons/utils/toaster';

const getHotelById = async (id) => {
  const { getToken } = tokenManager();
  const token = getToken();

  try {
    const response = await axios.post(`${environment.rootApi}/call/hotel/detail`, 
      { id }, // Body dengan id
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    notifyError('Gagal mengambil data hotel!');
    throw error;
  }
};

export default getHotelById;