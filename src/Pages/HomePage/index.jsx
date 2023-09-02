import React from "react";
import Footer from '../HomePage/Sections/Footer'
import BLogs from "./Sections/BLogs";
import Reviews from "./Sections/Reviews";



class HomePage extends React.Component {

    render() {

        return (
            <>
                <Reviews />
                <BLogs />
                <Footer />
            </>
        );
    }
}

export default HomePage;