import React, { Component } from 'react';
import MyLogo from '../assets/logo.png'

class LandingPage extends Component {
    render() {
        return (
            <>
                <div className="nav-fix"></div> {/* Since the <nav> is position: fixed, this is a bit of a hack -- */}
                <div className="landing">
                    <img src={MyLogo} alt="Studio Logo" width="500px" />
                    <h3>Please select from your options above.</h3>
                </div>
            </>

        )
    }
}

export default LandingPage;