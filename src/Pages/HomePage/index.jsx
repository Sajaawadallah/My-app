import React from "react";
import Footer from '../HomePage/Sections/Footer'
import BLogs from "./Sections/BLogs";
import Reviews from "./Sections/Reviews";
import Numbers from "./Sections/Numbers";
import WhatGoseOn from "./Sections/WhatGoseOn";
import AboutUs from "./Sections/AboutUs";



class HomePage extends React.Component {

    render() {

        return (
            <>
                <AboutUs />
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