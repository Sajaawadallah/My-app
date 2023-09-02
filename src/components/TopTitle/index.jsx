import React, { Component } from 'react'
import './style.css'

class TopTitle extends Component {
    render() {
        return (
            <div className='title-col'>
                <h2 className='maintitle'>{this.props.maintitle}</h2>
                <h3 className='suptitle'>{this.props.suptitle}</h3>
            </div>
        )
    }
}


export default TopTitle