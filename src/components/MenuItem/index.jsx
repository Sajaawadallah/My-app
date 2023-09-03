import React, { Component } from 'react'
import Image from '../Image'
import './style.css'

class MenuItem extends Component {
    render() {
        return (
            <div className='menuitem-row'>
                <Image src={this.props.menuItemImage} />
                <div className='menuitem-text'>
                    <p>{this.props.menuItemName}</p>
                    <span>{this.props.menuItemSupName}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="123" height="2" viewBox="0 0 123 2" fill="none">
                    <path d="M0 1H123" stroke="#FFCE6D" />
                </svg>
                <h5> Rs {this.props.menuItemPrice}</h5>
            </div>
        )
    }
}


export default MenuItem
