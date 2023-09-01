import React, { Component } from 'react'
import './style.css'

class IconWithTitle extends Component {


    render() {
        return (
            <div className='icon-row'>
                <div>{this.props.children}</div>
                <p className={this.props.icontitleclass}>{this.props.title}</p>
            </div>
        )
    }
}

export default IconWithTitle