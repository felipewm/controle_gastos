import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'


const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES ={ vendas: [{}], compras: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/fechamentos`)
    return {
        type: 'FECHAMENTO_OBTIDO',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values){
    return submit(values, 'delete')
}

function submit(values, method){    
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/fechamentos/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso')
                dispatch(init())
            }) 
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))      
                })
    
    }
}

export function showUpdate(fechamento) {
    return[
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('fechamentoForm', fechamento)
    ]
}

export function showDelete(fechamento) {
    return[
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('fechamentoForm', fechamento)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('fechamentoForm', INITIAL_VALUES)
    ]
}