import React, { Component } from 'react'
import Image from '../Image'
import './style.css'
import LightBg from '../LightBg'

class ReviewsCard extends Component {
    render() {
        return (
            <div className='review-card'>
                <LightBg>
                    <div className='clint-info'>
                        <Image src={this.props.clintimage} />
                        <div className='sup-info'>
                            <h6 className='sup-name'>
                                {this.props.clintname}
                            </h6>
                            <div className='sup-rating'>
                                {this.props.rating}
                            </div>
                        </div>

                    </div>
                    <div className='clint-review'>
                        <p>{this.props.review}</p>
                    </div>
                </LightBg>

            </div>
        )
    }
}

export default ReviewsCard;