import React, { Component } from 'react';
import '../App.css';
import main1 from '../img/avatar.png';

class Profile extends Component {
    render() {
        return (
            <div>
            <div class ="container-fluid" id="main-profile"> 
                <div class="row">
                   <div class= "col-12" >
                     <legend class="text-center">SIGN UP</legend>  
                   <div class = "col-4 mi" > 
                   <form class="form-horizontal">
                   <fieldset>
                     

                                    {/* first name */}
                                                    <div class="form-group">
                                                        <div class="col-md-8">
                                                            <div class="input-group">
                                                                <div class="input-group-addon"><i class="fa fa-user"></i></div>
                                                                <input id="Name (Full name)" name="Name (Full name)" type="text" placeholder="First Name" class="form-control input-md"/>
                                                            </div>
                                                    </div>
                                                    </div>
                                    {/* Last name */}
                                                    <div class="form-group">
                                                        <div class="col-md-8">
                                                            <div class="input-group">
                                                                <div class="input-group-addon">
                                                                    <i class="fa fa-male"></i>
                                                                </div>
                                                                <input id="Father" name="Father" type="text" placeholder="Last Name" class="form-control input-md"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                    {/* primary Phone number */}
                                                    <div class="form-group">
                                                        <div class="col-md-8">
                                                            <div class="input-group">
                                                                <div class="input-group-addon">
                                                                    <i class="fa fa-phone"></i>
                                                            </div>
                                                                <input id="Phone number " name="Phone number " type="text" placeholder="Primary Phone number " class="form-control input-md"/>
                                                                </div>
                                                    </div>
                                                    </div>
                                    {/* Secondary Phone number  */}
                                                    <div class="form-group">
                                                        <div class="col-md-8">
                                                            <div class="input-group">
                                                                <div class="input-group-addon">
                                                                    <i class="fa fa-mobile fa-1x"></i>
                                                            </div>
                                                                <input id="Phone number " name="Phone number " type="text" placeholder="Sec Phone number " class="form-control input-md"/>
                                                                </div>
                                                        
                                                    </div>
                                                    </div>
                                    {/* permanent address */}
                                                <div class="form-group">
                                                                <div class="col-md-8  col-xs-6">
                                                                    <input id="Permanent Address" name="Permanent Address" type="text" placeholder="Permanent Address" class="form-control input-md "/>
                                                                </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="col-md-4 col-xs-6">
                                                                    <input id="Permanent Address" name="Permanent Address" type="number" placeholder="zip-code" class="form-control input-md "/>
                                                                </div>
                                                                </div>
                                                        <div class="form-group">       
                                                            <div class="col-md-4  col-xs-2">
                                                                <input id="Permanent Address" name="Permanent Address" type="text" placeholder="state" class="form-control input-md "/>
                                                            </div>
                                                            </div>
                                                
                                    {/* Temporary address */}
                                                    <div class="form-group">
                                                        <div class="col-md-8  col-xs-6">
                                                            <input id="Temporary Address" name="Temporary Address" type="text" placeholder="Temporary Address" class="form-control input-md "/>
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                    <div class="col-md-4 col-xs-6">
                                                            <input id="Temporary Address" name="Temporary Address" type="number" placeholder="zip-code" class="form-control input-md "/>
                                                        </div>
                                                        <div class="col-md-4  col-xs-6">
                                                            <input id="Temporary Address" name="Temporary Address" type="text" placeholder="state" class="form-control input-md "/>
                                                        </div>
                                                </div>
                    

                   </fieldset>
                   </form>
                  
             </div>
             {/* payment method */}
                            <legend class="text-center">PAYMENT METHOD</legend> 
                    <div class = "container" > <div class="row">
                    
                        <div class="col-xs-12 col-md-4">
                            <div class="panel panel-default credit-card-box">
                                <div class="panel-heading display-table">
                                    <div class="row display-tr">
                                        <h6 class="panel-title display-td">Payment Details</h6>
                                        <div class="display-td">
                                            <img class="img-responsive pull-right"src="http://i76.imgup.net/accepted_c22e0.png"/>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                        <form role="form" id="payment-form">
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <div class="form-group">
                                                        <label for="cardNumber">CARD NUMBER</label>
                                                        <div class="input-group">
                                                            <span class="input-group-addon">
                                                                <i class="fa fa-credit-card"></i>
                                                            </span>
                                                            <input type="tel" class="form-control" name="cardNumber" placeholder="Valid Card Number" autocomplete="cc-number"required autofocus/>
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-xs-7 col-md-7">
                                                    <div class="form-group">
                                                        <label for="cardExpiry"><span class="hidden-xs">EXPIRATION </span><span class="visible-xs-inline">DATE</span></label>
                                                        <input type="tel" class="form-control" name="cardExpiry" placeholder="MM / YY" autocomplete="cc-exp" required/>
                                                    </div>
                                                </div>
                                                <div class="col-xs-5 col-md-5 pull-right">
                                                    <div class="form-group">
                                                        <label for="cardCVC">CV CODE</label>
                                                        <input type="tel" class="form-control" name="cardCVC" placeholder="CVC" autocomplete="cc-csc" required/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <div class="form-group">
                                                        <label for="couponCode">COUPON CODE</label>
                                                        <input type="text" class="form-control" name="couponCode" placeholder="Coupon Code"/>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div class="row">
                                                <div class="col-xs-12">
                                                    <button class="btn btn-success btn-lg btn-block" type="submit">Start Subscription</button>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <p class="payment-errors"></p>
                                                </div>
                                            </div> */}
                                        </form>
                                    </div>
                                </div>
                            

                            </div>

                        </div>
                    </div>
       </div>
        {/* uploading Photo */}
                            <div class="col-md-4">
                                <div class="col-md-2 hidden-xs">
                                    <img className="circle" src={main1} alt="photo" />
                                        <div class="form-group">
                                           <div class="col-md-2"> 
                                            <input id="Upload-photo" name="Upload photo" class="input-file" type="file"/>
                                          </div>
                                           <label class="col-md-12 control-label text-center" for="Upload photo">Upload photo</label>
                                        </div>
                                 </div> 
                            </div>
           
              </div> {/* row ends  */}
             </div> {/*container-fluid ends*/}
             </div>
        );
    }
}

export default Profile;
