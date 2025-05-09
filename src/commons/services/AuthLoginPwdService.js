import axios from "axios";

class AuthLoginPwdService {
  static call = async (params = {}) => {
    try {
      // Ambil semua pengguna dari db.json
      const response = await axios.get("http://localhost:3004/users");
      const users = response.data;

      // Cari pengguna berdasarkan email dan password
      const user = users.find(
        (u) => u.email === params.email && u.password === params.password
      );

      if (user) {
        return {
          status: 200,
          data: {
            token: `mock-token-${user.id}`, // Token mock untuk simulasi
            user,
          },
        };
      } else {
        return {
          status: 401,
          message: "Email atau password salah",
        };
      }
    } catch (e) {
      console.error("Error during login:", e);
      return {
        status: 500,
        message: "Terjadi kesalahan pada server",
      };
    }
  };
}

export default AuthLoginPwdService;