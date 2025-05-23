import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";
import { notifyError } from "@/commons/utils/toaster";

const getUserData = async () => {
  const { getToken } = tokenManager();
  const token = getToken();

  try {
    const response = await axios.post(`${environment.rootApi}/call/profile/by-email`, {}, {
      headers: {
        'Authorization': token,
      },
    });

    // Ambil data dari response.data.data
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
    notifyError(error);
    return null;
  }
};

export default getUserData;
