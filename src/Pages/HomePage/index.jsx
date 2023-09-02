import React from "react";
import Footer from '../HomePage/Sections/Footer'
import BLogs from "./Sections/BLogs";



class HomePage extends React.Component {

    render() {

        return (
            <>
                <BLogs />
                <Footer />
            </>
        );
    }
}

export default HomePage;