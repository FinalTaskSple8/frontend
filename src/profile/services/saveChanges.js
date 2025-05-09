import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'


const saveChanges = async (userId, updatedData) => {
	try {
    const response = await axios.put(
      `http://localhost:3004/users/${userId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw new Error("Failed to update user data");
  }
};

export default saveChanges
