import React, { Component } from 'react'
import './style.css'
import Image from '../Image';

class BLogCard extends Component {
    render() {
        return (
            <div className={` blog-item ${this.props.resvcol ? this.props.resvcol : " "}`}>

                <Image src={this.props.blogimage} />
                <div className='blog-content'>
                    <h2 className='blog-title'>{this.props.blogtitle}</h2>
                    <p className='blog-desc'>{this.props.blogdesc}</p>
                    <a href={this.props.bloglink}>{this.props.bloglinktext}</a>
                </div>



            </div>
        )
    }
}


export default BLogCard;