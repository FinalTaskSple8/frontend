import axios from "axios";
import { notifyError } from "@/commons/utils/toaster";

const getDataHotel = () => {
  return axios
    .get("http://localhost:7776/call/hotel/list")
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
};

export default getDataHotel;
