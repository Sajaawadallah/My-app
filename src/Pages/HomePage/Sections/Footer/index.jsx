import React, { Component } from 'react'
import CopyRight from '../../../../components/CopyRight'
import FooterForm from '../../../../components/FooterForm'
import FooterMenus from '../../../../components/FooterMenus'
import IconWithTitle from '../../../../components/IconWithTItle'
import LightBg from '../../../../components/LightBg'
import Container from '../../../../components/Container'
import './style.css'
import { SOCIELLINKS, OTHERLINKS } from '../../../../mock/Footerdata'
import Image from '../../../../components/Image'
import SocielIcon from '../../../../components/SocielIcons'


class Footer extends Component {


    render() {
        return (
            <>
                <LightBg>
                    <Container variant="Container-sm">
                        <div className='main-footer'>

                            <div className='about-us'>
                                <div className='logo'>
                                    <Image src='/Logo.png' alt="logo" />
                                    <h3>Golden View Dine </h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
                                <SocielIcon />
                            </div>

                            <FooterMenus menutitle="Other Links">
                                <ul className='other-links'>
                                    {OTHERLINKS.map((item) => (
                                        <li key={item.id}>
                                            <a href={item.link}>{item.linktitle}</a>
                                        </li>
                                    ))}
                                </ul>
                            </FooterMenus>
                            <FooterMenus menutitle="Contact Us">
                                <div className='socil-icons'>
                                    {SOCIELLINKS.map((item) => (
                                        <IconWithTitle key={item.id} title={item.title} icontitleclass="icon-title-light">
                                            {item.svgcode}
                                        </IconWithTitle>
                                    ))}

                                </div>
                            </FooterMenus>

                        </div>
                    </Container>
                </LightBg>

                <FooterForm />
                <CopyRight />
            </>
        )
    }
}

export default Footer