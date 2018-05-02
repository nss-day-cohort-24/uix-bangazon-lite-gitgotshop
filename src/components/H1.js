import React, { Component } from 'react';
import {
    BrowserRouter as Router,
        Route,
        Link,
} from 'react-router-dom';
import '../App.css';


class H1 extends Component {
    render() {
        return (
            <div className="margin-neg m-5 pt-5 text-center">
                <h1 className="my-4">Data-driven marketing</h1>
                <Link className="btn-white" to='/Products'>Let's Talk</Link>
            </div>
        );
    }
}

export default H1;


