import axios from 'axios';
import tokenManager from '@/commons/utils/token';
import environment from '@/commons/utils/environment';

const saveChanges = async (userId, updatedData) => {
  try {
    // Mendapatkan token dari tokenManager
    const { getToken } = tokenManager();
    const token = getToken();

    const response = await axios.post(
      'http://localhost:7776/call/profile/update-info',
      updatedData,
      {
        headers: {
        'Authorization': token,
      },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error('Error updating user data:', error);
    throw new Error('Failed to update user data');
  }
};

export default saveChanges;