import React, { Component } from 'react'
import LightBg from '../../../../components/LightBg'
import Container from '../../../../components/Container'
import './style.css'
import { NUMBERS } from '../../../../mock/NumbersData'
import NumbersCard from '../../../../components/NumbersCard'

class Numbers extends Component {
    render() {
        return (
            <LightBg>
                <Container variant="Container-sm">
                    <div className='numbers-row'>
                        {NUMBERS.map((number) => (
                            <NumbersCard key={number.id} numberimage={number.numberimage} number={number.number} text={number.text} />

                        ))}
                    </div>
                </Container>

            </LightBg>
        )
    }
}

export default Numbers