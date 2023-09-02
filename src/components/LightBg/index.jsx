import React, { Component } from 'react'
import './style.css'


class LightBg extends Component {
    render() {
        return (
            <div className='light-bg'>
                {this.props.children}
            </div>
        )
    }
}

export default LightBg