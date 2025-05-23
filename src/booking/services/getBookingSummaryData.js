import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";
import { notifyError } from "@/commons/utils/toaster";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const getBookingSummaryData = (params = {}) => {
	const { getToken } = tokenManager();
	const token = getToken();
	let paramsGet = Object.assign(params, {token});
	return axios.get(`${backendUrl}/call/booking/get-by-id`, {
  params: { id: params.id },
  headers: {
    'Authorization': token,
  }
})
.catch((error) => {
		console.error(error);
		notifyError(error);
	})
} 

export default getBookingSummaryData
