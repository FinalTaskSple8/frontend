import axios from "axios";
import tokenManager from "@/commons/utils/token";

class AuthLoginPwdService {
  static call = async (params = {}) => {
    const { getToken } = tokenManager();
    const token = getToken();
    params = Object.assign(params, {
      token,
    });

    const encodedData = `token=${token}`;

    try {
      const response = await axios.post(
        `http://localhost:7776/auth/login/pwd?${encodedData}`,
        params,
      );

      return response;
    } catch (e) {
      return {};
    }
  };
}

export default AuthLoginPwdService;