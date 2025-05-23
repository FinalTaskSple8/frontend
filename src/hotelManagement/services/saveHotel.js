import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const saveHotel = (data = {}) => {
    let body = data;

    const { getToken } = tokenManager();
    const token = getToken();

    return axios.post(`${backendUrl}/call/hotel`, body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export default saveHotel