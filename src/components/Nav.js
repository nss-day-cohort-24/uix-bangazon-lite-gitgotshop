import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
} from 'react-router-dom';
import Home from '../pages/Home.js';
import Profile from '../pages/Profile.js';
import Cart from '../pages/Cart.js';
import Products from '../pages/Products.js';
import FormModal from './FormModal';
import SingleProduct from '../pages/SingleProduct.js';
import Seller from '../pages/Seller.js';

class Nav extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         authed: false,
    //         user: {}
    //     }
    //     this.updateAuth = this.updateAuth.bind(this);
    //     this.signout = this.signout.bind(this);
    // }

    // updateAuth(user) {
    //     console.log("updateAuth user", user);
    //     this.setState({
    //         authed: true,
    //         user: user
    //     });
    // }

    // signout() {
    //     console.log("signed out");
    //     this.setState({
    //         authed: false
    //     });
    // }

    render() {

        return (

            <div>
                {this.props.authed ?
                    <Router>
                        <div>
                            <nav className="d-flex flex-row justify-content-between px-3 py-3">
                                <div className="align-items-center">
                                    <NavLink className="mr-3 minezy" to='/'>MINEZY</NavLink>
                                    <input type="text" placeholder="search" />
                                </div>
                                <div className="align-items-center">
                                    <NavLink className="mx-2 btn-white" to='/Seller'>My Inventory</NavLink>
                                    <NavLink className="mx-2 btn-white" to='/Products'>Products</NavLink>
                                    <NavLink className="mx-2 btn-white" to='/Profile'>Profile</NavLink>
                                    <a className="mx-2 btn-white" href="" onClick={this.props.signout}>Sign out</a>
                                    <NavLink className="mx-2 cart" to='/Cart'><i className="fas fa-shopping-cart fa-lg"></i></NavLink>
                                </div>
                            </nav>
                            <div>
                                <Route exact path='/' component={Home} />
                                <Route path='/Profile' component={Profile} />
                                {/* <Route path='/Seller' component={Seller} user={this.props.user}/> */}
                                <Route path='/Seller' render={(props) => <Seller user={this.props.user} />} />
                                <Route path='/Cart' component={Cart} />
                                <Route path="/Products" component={Products} />
                                <Route path="/SingleProduct" component={SingleProduct} />
                            </div>
                        </div>
                    </Router>
                :
                    <Router>
                        <div>
                            <nav className="d-flex flex-row justify-content-between px-3 py-3">
                                <div className="align-items-center">
                                    <NavLink className="mr-3 minezy" to='/'>MINEZY</NavLink>
                                    <input type="text" placeholder="search" />
                                </div>
                                <div className="align-items-center">
                                    <NavLink className="mx-2 btn-white" to='/Products'>Products</NavLink>
                                    <FormModal updateAuth={this.props.updateAuth} />
                                    <NavLink className="mx-2 cart" to='/Cart'><i className="fas fa-shopping-cart fa-lg"></i></NavLink>
                                </div>
                            </nav>
                            <div>
                                <Route exact path='/' component={Home} />
                                <Route path='/Profile' component={Profile} />
                                <Route path='/Cart' component={Cart} />
                                <Route path="/Products" component={Products} />
                                <Route path="/SingleProduct" component={SingleProduct} />
                            </div>
                        </div>
                    </Router>
                }
            </div>
        );
    }
}

export default Nav;


