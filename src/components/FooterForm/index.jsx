import React, { Component } from 'react'
import Container from '../Container'
import OutlineButton from '../OutlineButton'
import './style.css'
import IconWithTitle from '../IconWithTItle'

class FooterForm extends Component {
    render() {
        return (



            <Container variant="Container-sm">

                <div className='form-row'>
                    <IconWithTitle title="Subscribe to our Newsletter" icontitleclass="icon-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M2 6L16 16L30 6M2 26H30V6H2V26Z" stroke="#A08040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </IconWithTitle>

                    <form action="#">
                        <input type='text' placeholder='Your Email id' />
                        <OutlineButton type="submit" name="Subscribe" />
                    </form>
                </div>






            </Container>





        )
    }
}

export default FooterForm

























