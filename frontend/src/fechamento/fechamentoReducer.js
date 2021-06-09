import { actions } from "react-redux-toastr"
import { actionTypes } from "redux-form"

const INITIAL_STATE = { list:[]}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'FECHAMENTO_OBTIDO':
            return{ ...state, list: action.payload.data }
        default:
            return state
    }
}