import React, { Component } from 'react'
import './style.css'
import Image from '../Image'

class NumbersCard extends Component {
    render() {
        return (
            <div className='numbercard'>
                <Image src={this.props.numberimage} />
                <div className='number-col'>
                    <h2>{this.props.number}</h2>
                    <h5>{this.props.text}</h5>
                </div>

            </div>
        )
    }
}


export default NumbersCard