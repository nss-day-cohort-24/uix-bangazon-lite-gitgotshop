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
import Seller from '../pages/Seller.js';
import ProfileCard from '../pages/ProfileCard';

/**
 * Main site navigation. Loads a Search bar and 2 buttons (One to the 'Products' component, and the other to the 'Sign Up' modal.)
 */


class Nav extends Component {

render() {
    if(this.props.authed && this.props.seller){
        return (
            <div>
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
                                <NavLink className="mx-2 btn-white" to='/ProfileCard'>Profile</NavLink>
                                <a className="mx-2 btn-white" href="" onClick={this.props.signout}>Sign out</a>
                                <NavLink className="mx-2 cart" to='/Cart'><i class="fas fa-shopping-cart fa-lg"></i></NavLink>
                            </div>
                        </nav>
                        <div>
                            <Route exact path='/' component={Home} />
                            <Route path='/ProfileCard' render={(props) => <ProfileCard userProfile={this.props.userProfile} />} />
                            {/* <Route path='/Seller' component={Seller} user={this.props.user}/> */}
                            <Route path='/Seller' render={(props) => <Seller user={this.props.user} />} />
                            <Route path='/Cart' render={(props) => <Cart user={this.props.user} />} />
                            <Route path="/Products" render={(props) => <Products user={this.props.user} />} />                                            
                            {/* <Route path="/SingleProduct" component={SingleProduct} /> */}
                        </div>
                    </div>
                </Router> 
            </div>)
    }else if(this.props.authed && !this.props.seller){
        return (
            <div>
                <Router>
                    <div>
                        <nav className="d-flex flex-row justify-content-between px-3 py-3">
                            <div className="align-items-center">
                                <NavLink className="mr-3 minezy" to='/'>MINEZY</NavLink>
                                <input type="text" placeholder="search" />
                            </div>
                            
                            <div className="align-items-center">
                            <NavLink className="mx-2 btn-white" to='#' onClick={this.props.becomeSeller}>Become a Seller</NavLink>
                                <NavLink className="mx-2 btn-white" to='/Products'>Products</NavLink>
                                <NavLink className="mx-2 btn-white" to='/ProfileCard'>Profile</NavLink>
                                <a className="mx-2 btn-white" href="" onClick={this.props.signout}>Sign out</a>
                                <NavLink className="mx-2 cart" to='/Cart'><i class="fas fa-shopping-cart fa-lg"></i></NavLink>
                            </div>
                        </nav>
                        <div>
                            <Route exact path='/' component={Home} />
                            <Route path='/ProfileCard' render={(props) => <ProfileCard userProfile={this.props.userProfile} />} />
                            {/* <Route path='/Seller' component={Seller} user={this.props.user}/> */}
                            <Route path='/Seller' render={(props) => <Seller user={this.props.user} />} />
                            <Route path='/Cart' render={(props) => <Cart user={this.props.user} />} />
                            <Route path="/Products" render={(props) => <Products user={this.props.user} />} />                                            
                            {/* <Route path="/SingleProduct" component={SingleProduct} /> */}
                        </div>
                    </div>
                </Router> 
            </div>)
    } else {
        return (
            <div>
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
                                <NavLink className="mx-2 cart" to='/Cart'><i class="fas fa-shopping-cart fa-lg"></i></NavLink>
                            </div>
                        </nav>
                        <div>
                            <Route exact path='/' component={Home} />
                            <Route path='/Profile' component={Profile} />
                            <Route path='/Cart' render={(props) => <Cart user={1} />} /> 
                            <Route path="/Products" render={(props) => <Products user={1} />} />
                            {/* <Route path="/SingleProduct" component={SingleProduct} /> */}
                        </div>
                    </div>
                </Router>
            </div>)
    }
}
}


export default Nav;


