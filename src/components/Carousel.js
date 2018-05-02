import React, { Component } from 'react';
import '../App.css';
import main1 from '../img/main_1.jpeg';
import main2 from '../img/main_2.jpg';




class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={main1} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={main2} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={main1} alt="Third slide" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;


