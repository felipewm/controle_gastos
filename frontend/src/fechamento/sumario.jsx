import React, { Component }  from 'react'

import Grid from '../common/layout/grid'

import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({vendas, compras}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='dollar'
                    value={`R$ ${vendas}`} text='Total de Vendas' />
                <ValueBox cols='12 4' color='red' icon='credit-card'
                    value={`R$ ${compras}`} text='Total de Compras' />                
                <ValueBox cols='12 4' color='blue' icon='money'
                    value={`R$ ${vendas - compras}`} text='Valor Consolidado' />    
            </Row>
        </fieldset>
    </Grid>
)