import React, { Component } from 'react';
import '../App.css';
import H1 from '../components/H1.js';
import main1 from '../img/main_1.jpeg';


class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <img className="w-100" src={main1} alt="" />
                </div>
                <H1 />
            </div>
        );
    }
}

export default Home;
