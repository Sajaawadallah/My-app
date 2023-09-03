import React, { Component } from 'react'
import LightBg from '../../../../components/LightBg'
import Container from '../../../../components/Container'
import './style.css'
import SpecialCard from '../../../../components/SpecialCard'
import TopTitle from '../../../../components/TopTitle'
import { SPECIALS } from '../../../../mock/SpecialData'

class Special extends Component {
    render() {
        return (
            <LightBg>
                <TopTitle maintitle="Special" suptitle="What makes us special" />
                <Container>
                    <div className='special-row'>
                        {SPECIALS.map((c) => (
                            <SpecialCard key={c.id} specialcardimage={c.specialcardimage} specialcardtitle={c.specialcardtitle} specialcarddesc={c.specialcarddesc} />

                        ))}

                    </div>
                </Container>
            </LightBg>
        )
    }
}

export default Special
