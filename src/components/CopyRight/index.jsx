import React, { Component } from 'react'
import LightBg from '../LightBg'

import './style.css'

class index extends Component {
    render() {
        return (
            <LightBg>
                <div className='copy-right-row'>
                    <p className='py-2'>
                        Copyright © 2022 Golden Dine website <br />
                        All rights reserved
                    </p>
                </div>
            </LightBg>
        )
    }
}

export default index
