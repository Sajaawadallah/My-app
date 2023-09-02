import React, { Component } from 'react'
import ImageWithText from '../ImageWithTextSection'
import './style.css'

class WhatGoseOn extends Component {
    render() {
        return (
            <ImageWithText secimg='/sec1.png' imgclass="imgclass" maintitle="Cooking ingredients" suptitle="What goes in" contenprg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit." />
        )
    }
}

export default WhatGoseOn