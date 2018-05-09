import React, { Component } from 'react';
import '../App.css';
import H1 from '../components/H1.js';
import main from '../img/main_1.png';


class Home extends Component {
    render() {
        return (
            <div>
                <img className='img-fluid w-100' src={main} alt="" />
                <H1 />
            </div>
        );
    }
}

export default Home;
