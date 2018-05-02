import React, { Component } from 'react';
import '../App.css';
import H1 from '../components/H1.js';
import Carousel from '../components/Carousel.js';


class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <H1 />
            </div>
        );
    }
}

export default Home;
