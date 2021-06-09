import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export function getSumario() {
    const request = axios.get(`${BASE_URL}/fechamentos/sumario`)
    return {
        type:'SUMARIO_FECHAMENTOS_OBTIDO',
        payload: request
    }
}