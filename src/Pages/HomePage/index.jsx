import React from "react";
import Footer from '../HomePage/Sections/Footer'
import BLogs from "./Sections/BLogs";
import Reviews from "./Sections/Reviews";
import Numbers from "./Sections/Numbers";
import WhatGoseOn from "./Sections/WhatGoseOn";
import AboutUs from "./Sections/AboutUs";
import Special from "./Sections/Special";
import FlatOff from "./Sections/FlatOff";



class HomePage extends React.Component {

    render() {

        return (
            <>
                <AboutUs />
                <Special />
                <FlatOff />
                <WhatGoseOn />
                <Numbers />
                <Reviews />
                <BLogs />
                <Footer />
            </>
        );
    }
}

export default HomePage;