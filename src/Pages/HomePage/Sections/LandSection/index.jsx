import React, { Component } from 'react'
import './style.css'
import OutlineButtton from '../../../../components/OutlineButton'
import Header from '../../../../components/Header'

export default class LandSection extends Component {
    render() {
        return (
            <div className='land_section'>
                <div className='land_header'>
                    <Header />
                </div>

                <div className='land_content'>

                    <h1>Welcome To<br />
                        Golden View Dine </h1>
                    <p>Explore the authentic vegan dishes with your friends and family</p>
                    <OutlineButtton type='button' name='Read More' />
                </div>
            </div>
        )
    }
}
