import React, { Component } from 'react';
import '../App.css';
import H1 from '../components/H1.js';
import main from '../img/2.png';


class Home extends Component {
    render() {
        return (
            <div>
                <img className="w-100" src={main} alt="" />
                <H1 />
            </div>
        );
    }
}

export default Home;
