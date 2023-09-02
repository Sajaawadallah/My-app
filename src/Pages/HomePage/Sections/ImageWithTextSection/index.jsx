import React, { Component } from 'react'
import Container from '../../../../components/Container'
import Image from '../../../../components/Image'
import TopTitle from '../../../../components/TopTitle'
import OutlineButton from '../../../../components/OutlineButton'
import './style.css'

class ImageWithText extends Component {
  render() {
    return (
      <Container variant="Container-sm">
        <div className='main-section-row'>
          <div className='content-section'>
            <TopTitle maintitle={this.props.maintitle} suptitle={this.props.suptitle} />
            <p className='contenprg'>{this.props.contenprg}</p>
            <OutlineButton type='button' name='Read More' />
          </div>
          <Image src={this.props.secimg} imgclass={this.props.imgclass} />

        </div>
      </Container>


    )
  }
}


export default ImageWithText