import React, { Component } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators } from 'redux'

import { getSumario } from './painelActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Painel extends Component {

    componentWillMount(){
        this.props.getSumario()
    }
    render() {
        const { venda, compra} = this.props.sumario
        return (
            <div>
                <ContentHeader title='Painel' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${venda}`} text='Total de vendas' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${compra}`} text='Total de compras' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${venda - compra}`} text='Valor consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({sumario: state.painel.sumario})

const mapDispatchToProps = dispatch => bindActionCreators({getSumario}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Painel)