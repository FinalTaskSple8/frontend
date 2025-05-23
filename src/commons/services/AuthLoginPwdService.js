import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

class AuthLoginPwdService {
  static call = async (params = {}, token, setCurrentUser) => {
    const encodedData = `token=${encodeURIComponent(token)}`;

    try {
      // Step 1: login
      const response = await axios.post(
        `${backendUrl}/auth/login/pwd?${encodedData}`,
        params
      );

      // Step 2: buat profile kosong
      const response2 = await fetch(`${backendUrl}/call/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ phone_number: "" }),
      });

      if (!response2.ok) {
        console.error("Failed to create profile:", response2.statusText);
        return response;
      }

      // Step 3: ambil profile by email
      const response3 = await axios.post(
        `${backendUrl}/call/profile/by-email`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );

      // Simpan current user jika ada
      if (setCurrentUser) {
        setCurrentUser(response3.data.data);
      }

      return {
        status: 200,
        data: {
          token,
          user: response3.data.data,
        },
      };
    } catch (e) {
      console.error("Error during login or profile creation:", e);
      return {
        status: 500,
        message: "Login or profile creation failed.",
      };
    }
  };
}

export default AuthLoginPwdService;
