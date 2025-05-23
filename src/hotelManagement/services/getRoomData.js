import axios from "axios";
import { notifyError } from "@/commons/utils/toaster";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const getRoomData = (params = {}) => {
    if (!params.hotelId) {
        const errorMessage = "Missing required parameter: hotelId";
        console.error(errorMessage);
        notifyError(errorMessage);
        return Promise.reject(new Error(errorMessage));
    }

    return axios.post(`${backendUrl}/call/room/by-hotel`, {
        hotelId: params.hotelId, // Send hotelId in the request body
    }).catch((error) => {
        console.error(error);
        notifyError(error.response?.data?.message || "An error occurred");
        return Promise.reject(error); // Ensure the error propagates
    });
};

export default getRoomData;