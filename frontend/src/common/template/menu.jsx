import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'


export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Painel' icon='tachometer' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#fechamentos'
                label='Ciclos de pagamentos' icon='dollar'/>
        </MenuTree>
    </ul>
)