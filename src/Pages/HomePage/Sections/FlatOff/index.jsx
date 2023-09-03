import React, { Component } from 'react'
import LightBg from '../../../../components/LightBg'
import Container from '../../../../components/Container'
import './style.css'
import Image from '../../../../components/Image'
import OutlineButton from '../../../../components/OutlineButton'

class FlatOff extends Component {
    render() {
        return (
            <LightBg>

                <Container >
                    <div className='flat-row'>
                        <Image src="/c1.png" imgclass="flat-img" />
                        <div className='flat-col'>
                            <h4>Come join us for a lunch this weekend and enjoy</h4>
                            <h3>FLAT 10% OFF</h3>
                            <OutlineButton type='button' name="Book Table" />
                        </div>
                        <Image src="/c1.png" imgclass="flat-img" />

                    </div>
                </Container>
            </LightBg>
        )
    }
}


export default FlatOff