import React, { Component } from 'react'

class Image extends Component {
    render() {
        return (

            <img src={this.props.src} alt={this.props.alt} className={this.props.imgclass ? this.props.imgclass : " "} />

        )
    }
}


export default Image