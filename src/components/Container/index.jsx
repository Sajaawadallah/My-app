import React, { Component } from 'react'
import './style.css'

class Container extends Component {

  render() {
    const { children } = this.props
    return (
      <div className={`Container ${this.props.variant ? this.props.variant : " "}`} >
        {children}
      </div>

    )
  }
}

export default Container