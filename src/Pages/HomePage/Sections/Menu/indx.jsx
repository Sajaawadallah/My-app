import React, { Component } from 'react'
import TopTitle from '../../../../components/TopTitle'
import Container from '../../../../components/Container'
import MenuItem from '../../../../components/MenuItem'
import './style.css'
import { MENU_DATA } from '../../../../mock/MenuData'


export default class Menu extends Component {
    render() {
        return (
            <>
                <TopTitle maintitle='Straight From Kitchen' suptitle="Our Menu" />
                <Container>
                    <div className='menu_items_row'>
                        {MENU_DATA.map((menuitem) => (
                            <MenuItem key={menuitem.id} menuItemImage={menuitem.img} menuItemName={menuitem.name} menuItemSupName={menuitem.supname} menuItemPrice={menuitem.price} />

                        ))}



                    </div>

                </Container>

            </>
        )
    }
}
