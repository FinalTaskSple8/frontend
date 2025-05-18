import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'

const saveHotel = (data = {}) => {
    let body = data;

    const { getToken } = tokenManager();
    const token = getToken();

    return axios.post('http://localhost:7776/call/hotel', body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export default saveHotel