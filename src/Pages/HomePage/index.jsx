import React from "react";
import Footer from '../HomePage/Sections/Footer'
import BLogs from "./Sections/BLogs";
import Reviews from "./Sections/Reviews";
import Numbers from "./Sections/Numbers";



class HomePage extends React.Component {

    render() {

        return (
            <>
                <Numbers />
                <Reviews />
                <BLogs />
                <Footer />
            </>
        );
    }
}

export default HomePage;