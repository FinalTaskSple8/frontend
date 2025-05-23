import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const addEarlyCheckInLateCheckOut = (data = {}) => {
	let body = data;

	const { getToken } = tokenManager();
	const token = getToken();

	return axios.post(`${backendUrl}/call/earlycheckinout/save`, body,
	{
		params: { token },
		
		headers: {
			'Authorization': token,
			
		}
	})} 

export default addEarlyCheckInLateCheckOut
