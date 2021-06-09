import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { reduxForm, Field, formValueSelector} from 'redux-form'

import { init } from './fechamentoActions'
import labelAndInput from  '../common/form/labelAndInput'
import ItemList from './itemList'
import Sumario from './sumario'

class FechamentoForm extends Component {

    calcularSumario() {
        const soma = (t, v) => t + v

         return {
             somaVendas: this.props.vendas.map(v => +v.valor || 0).reduce(soma),
             somaCompras: this.props.compras.map(c => +c.valor || 0).reduce(soma)
         }
    }

    render() {
        const { handleSubmit, readOnly, vendas, compras } = this.props
        const {somaCompras, somaVendas} = this.calcularSumario()
        return (
            <form role='form' onSubmit={handleSubmit }>
                <div className='box-body'>
                    <Field name='nome' component={labelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='mes'  component={labelAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês'/>
                    <Field name='ano'  component={labelAndInput} type='number' readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano'/>

                    <Sumario vendas={somaVendas} compras={somaCompras} />
                    <ItemList cols='12 6' list={vendas} readOnly={readOnly} 
                        field='vendas' legend='Vendas'/>
                    <ItemList cols='12 6' list={compras} readOnly={readOnly} 
                        field='compras' legend='Compras'/>                        
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}> 
                        {this.props.submitLabel} </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}
FechamentoForm = reduxForm({form: 'fechamentoForm', destroyOnUnmount: false })(FechamentoForm)
const selector = formValueSelector('fechamentoForm')
const mapStateToProps = state => ({vendas: selector(state, 'vendas'),
                                    compras: selector(state, 'compras')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FechamentoForm)