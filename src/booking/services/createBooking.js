import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'


const createBooking = (data = {}) => {
	let body = data;

	const { getToken } = tokenManager();
	const token = getToken();

	return axios.post(`http://localhost:7776/call/booking`, body,
	{
		params: { token },
		
		headers: {
			'Authorization': token,
			
		}
	})
}

export default createBooking
