import React, { Component } from 'react'
import TopTitle from '../../../../components/TopTitle'
import ReviewsCard from '../../../../components/ReviewsCard'
import './style.css'
import { REVIWES } from '../../../../mock/ReviwesData'

class Reviews extends Component {
    render() {
        return (
            <>
                <TopTitle maintitle='Reviews' suptitle='words from our food lovers' />
                <div className='reviews-row'>

                    {REVIWES.map((review) => (
                        <ReviewsCard key={review.id} clintimage={review.clintimage} clintname={review.clintname} rating={review.rating} review={review.review} />
                    ))}


                </div>

            </>
        )
    }
}

export default Reviews