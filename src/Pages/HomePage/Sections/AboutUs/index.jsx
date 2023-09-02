import React, { Component } from 'react'
import ImageWithText from '../ImageWithTextSection'
import './style.css'

class AboutUs extends Component {
    render() {
        return (
            <ImageWithText secimg='/sec2.png' imgclass="aboutusimg" maintitle="About Us" suptitle="Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine" contenprg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit." />
        )
    }
}

export default AboutUs