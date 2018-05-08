import React, { Component } from 'react';
import './Cart.css';
import Button from '../components/Button.js';


class CartSubtotal extends Component {
    render() {
        return (
            <div>
                <div className="mx-auto subtotal-overview">
                    <div className="d-flex subtotal">
                        <div className="d-flex row mx-0 subtotal-price">
                            <div className="bodyText">subtotal</div>
                            <div className="bodyText">price</div>
                        </div>
                        <div className="d-flex row mx-0 subtotal-price subtotal-break">
                            <div className="bodyText">taxes</div>
                            <div className="bodyText">price</div>
                        </div>
                        <div className="d-flex row mx-0 subtotal-price">
                            <div className="bodyText">total</div>
                            <div className="bodyText">price</div>
                        </div>
                        <Button class="btn-red mt-5 mb-5 checkout" link="" name="Checkout" />
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default CartSubtotal;


// import React, { Component } from 'react';
// import './Cart.css';

// /**
//  * Products that have been added to the Shopping Cart.
//  */

// class CartSubtotal extends Component {
//     render() {
//         return (
//             <div>
//                 <div className="mx-auto subtotal-overview container">
//                     <div className="d-flex subtotal row">
//                         <div className="d-flex col subtotal-price">
//                             <div>subtotal</div>
//                             <div>price</div>
//                         </div>
//                         <div className="d-flex col subtotal-price">
//                             <div>taxes</div>
//                             <div>price</div>
//                         </div>
//                         <div className="d-flex col subtotal-price">
//                             <div>total</div>
//                             <div>price</div>
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default CartSubtotal;