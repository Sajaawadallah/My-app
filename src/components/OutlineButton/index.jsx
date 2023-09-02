import React, { Component } from 'react'
import './style.css'

class OutlineButtton extends Component {
    render() {
        return (
            <button type={this.props.type} name={this.props.name}>{this.props.name}</button>
        )
    }
}

export default OutlineButtton