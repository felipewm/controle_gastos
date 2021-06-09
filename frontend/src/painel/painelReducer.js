const INITIAL_STATE = {sumario: {venda: 0, compra: 0}}

export default function(state=INITIAL_STATE, action){
    switch(action.type){
        case 'SUMARIO_FECHAMENTOS_OBTIDO':
            return{...state,sumario: action.payload.data }
        default:
            return state
    }
}