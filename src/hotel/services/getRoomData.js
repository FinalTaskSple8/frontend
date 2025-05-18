import axios from "axios";
import { notifyError } from "@/commons/utils/toaster";

const getRoomData = (params = {}) => {
    if (!params.hotelId) {
        const errorMessage = "Missing required parameter: hotelId";
        console.error(errorMessage);
        notifyError(errorMessage);
        return Promise.reject(new Error(errorMessage));
    }

    return axios.post("http://localhost:7776/call/room/by-hotel", {
        hotelId: params.hotelId, // Send hotelId in the request body
    }).catch((error) => {
        console.error(error);
        notifyError(error.response?.data?.message || "An error occurred");
        return Promise.reject(error); // Ensure the error propagates
    });
};

export default getRoomData;