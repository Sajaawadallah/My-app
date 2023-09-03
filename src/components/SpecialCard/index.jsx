import React, { Component } from 'react'
import './style.css'
import Image from '../Image'

class SpecialCard extends Component {
    render() {
        return (
            <div className='specialcard'>
                <div className='specialcard-col'>
                    <Image src={this.props.specialcardimage} />
                    <h4>{this.props.specialcardtitle}</h4>
                    <p>{this.props.specialcarddesc}</p>

                </div>
            </div>
        )
    }
}

export default SpecialCard