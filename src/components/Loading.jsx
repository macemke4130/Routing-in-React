import React, { Component } from 'react';
import loadingPic from '../assets/loading.png';

class Loading extends Component {
    render() {
        return (
            <>
                <div className="nav-bump"></div>
                <div className="d-flex justify-content-center align-items-center loading-page">
                    <img src={loadingPic} className="spin-me" alt="Loading Img" />
                    <h1>Loading...</h1>
                </div>
            </>
        )
    }
}

export default Loading;