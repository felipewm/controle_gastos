import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer } from 'react-redux-toastr'

import PainelReducer from '../painel/painelReducer'
import TabReducer from '../common/tab/tabReducer'
import FechamentoReducer from '../fechamento/fechamentoReducer'

const rootReducer = combineReducers({
    painel: PainelReducer,
    tab: TabReducer,
    fechamento: FechamentoReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer