import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";
import { notifyError } from "@/commons/utils/toaster";

const getDataHotel = () => {
    return axios.get("https://json-server-production-cbaa.up.railway.app/hotels")
        .catch((error) => {
            console.error(error);
            notifyError(error);
        });
}

export default getDataHotel