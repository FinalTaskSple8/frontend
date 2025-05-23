import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const createBooking = (data = {}) => {
	let body = data;

	const { getToken } = tokenManager();
	const token = getToken();

	return axios.post(`${backendUrl}/call/booking`, body,
	{
		params: { token },
		
		headers: {
			'Authorization': token,
			
		}
	})
}

export default createBooking
