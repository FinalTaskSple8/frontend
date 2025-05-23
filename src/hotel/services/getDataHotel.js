import axios from "axios";
import { notifyError } from "@/commons/utils/toaster";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const getDataHotel = () => {
  return axios
    .get(`${backendUrl}/call/hotel/list`)
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
};

export default getDataHotel;
