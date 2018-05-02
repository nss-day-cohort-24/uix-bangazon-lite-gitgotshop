import React, { Component } from 'react';
import '../App.css';


function Button(props) {
    return (
        <div>
            <a className={props.class}>{props.video}</a>
        </div>
    );
}

export default Button;



