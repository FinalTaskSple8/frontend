import axios from "axios";
import { notifyError } from "@/commons/utils/toaster";

const getRoomData = (params = {}) => {
    return axios.get("http://localhost:3004/rooms", {
        params, // Menggunakan params untuk query string seperti hotelId
    }).catch((error) => {
        console.error(error);
        notifyError(error);
    });
};

export default getRoomData;