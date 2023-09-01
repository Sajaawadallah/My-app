import React, { Component } from 'react'
import './style.css'

class FooterMenus extends Component {
    render() {
        return (
            <div>

                <div className='menu-col'>
                    <h3 className='menu-title'>{this.props.menutitle}</h3>
                    {this.props.children}
                </div>

            </div>
        )
    }
}


export default FooterMenus