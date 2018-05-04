import React, { Component } from 'react';
import '../App.css';
import main1 from '../img/avatar.png';

class Profile extends Component {
    render() {
        return (
            <div>
            <div class ="container" id="main-profile"> 
                <div class="row">
                    <div class="col-sm-4 col-md-4 col-lg-4">
                         <div class="col-md-1">
                                <div class="col-md-2 hidden-xs">
                                    <img className="round-circle" src={main1} alt="photo" />
                                        <div class="form-group">
                                           <div class="col-md-2"> 
                                            <input id="Upload-photo" name="Upload photo" class="input-file" type="file"/>
                                          </div>
                                           <label class="col-md-12 control-label text-center" for="Upload photo" accept=".jpg, .jpeg, .png"></label>
                                        </div>
                                 </div> 
                            </div>
                    </div>
                   <div class="col-sm-6 col-md-6 col-lg-6 central" >
                    
                   <div class = "col-8 " > 
                         <legend class="text-center">SIGN UP</legend> 
                   <form class="form-horizontal">
                <fieldset>
                              {/* first name */}
                                                    <div class="form-group">
                                                        <div class="col-md-8 p-0">
                                                            <div class="input-group">
                                                                <div class="input-group-addon">
                                                                    {/* <i class="fa fa-user"></i> */}
                                                                    </div>
                                                                <input id="Name (Full name)" name="Name (Full name)" type="text" placeholder="First Name" class="form-control input-md"/>
                                                            </div>
                                                    </div>
                                                    </div>
                                    {/* Last name */}
                                                    <div class="form-group">
                                                        <div class="col-md-8 p-0">
                                                            <div class="input-group">
                                                                <div class="input-group-addon">
                                                                    {/* <i class="fa fa-male"></i> */}
                                                                </div>
                                                                <input id="Father" name="Father" type="text" placeholder="Last Name" class="form-control input-md"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                  
                                                    <div class="form-group">
                                                        <div class="col-md-8 p-0">
                                                            <div class="input-group">
                                                                <div class="input-group-addon">
                                                           
                                                            </div>
                                                                <input id="Phone number " name="Phone number " type="text" placeholder="Phone number " class="form-control input-md"/>
                                                                </div>
                                                   </div>
                                                    </div>
                                    {/* permanent address */}
                                                <div class="form-group">
                                                    <div class="col-md-8 p-0">
                                                        <input id="Permanent Address" name="Permanent Address" type="text" placeholder="Permanent Address" class="form-control input-md "/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div class="form-group">
                                                        <div class="col-md-8p-">
                                                          <input id="Permanent Address" name="Permanent Address" type="number" placeholder="zip-code" class="form-control input-md "/>
                                                         </div>
                                                    </div>
                                                    <div class="form-group">       
                                                            <div class="col-md-6">
                                                                <input id="Permanent Address" name="Permanent Address" type="text" placeholder="state" class="form-control input-md "/>
                                                            </div>
                                                    </div>
                                                </div>
                                   
                   </fieldset>
                   </form>
                  
             </div> {/*col-8 ends*/}   
             {/* payment method */}
                           
                    <div class = "container" > 
                        <div class="row">
                     <div class="col-xs-4 col-md-8">
                         <legend class="paym">PAYMENT METHOD</legend> 
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
                                                <div class="col-xs-4 mx-0">
                                                    <div class="form-group">
                                                        <label for="cardNumber">CARD NUMBER</label>
                                                        <div class="input-group">
                                                           
                                                            <input type="tel" class="form-control " name="cardNumber" placeholder="Valid Card Number" autocomplete="cc-number"required autofocus/>
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-xs-4 col-sm-4 cardex p-0">
                                                    <div class="form-group">
                                                        <label for="cardExpiry"><span class="hidden-xs"> </span><span class="visible-xs-inline">DATE</span></label>
                                                        <input type="tel" class="form-control" name="cardExpiry" placeholder="MM / YY" autocomplete="cc-exp" required/>
                                                    </div>
                                                </div>
                                                <div class="col-xs-8 col-sm-4 pull-right">
                                                    <div class="form-group">
                                                        <label for="cardCVC">CV CODE</label>
                                                        <input type="tel" class="form-control" name="cardCVC" placeholder="CVC" autocomplete="cc-csc" required/>
                                                    </div>
                                                </div>
                                            </div>
                                          
                                        </form>
                                    </div>
                                </div>
                           </div>
                     </div>
                    </div>{/*end of payment*/}
</div> {/*end of class col - 4 central */}
        {/* uploading Photo */}
                           
           
              </div> {/* row ends  */}
             </div> {/*container-fluid ends*/}
             </div>
        );
    }
}

export default Profile;
