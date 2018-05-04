import React, { Component } from 'react';
import '../App.css';

/**
 * Buttons can be btn-red, btn-blue or btn-white in their props.class
 * 
 * Author @lindsay (https://github.com/mulhollen)
 */

function Button(props) {
    return (
        <div>
            <a className={props.class} href={props.link}>{props.name}</a>
        </div>
    );
}

export default Button;



