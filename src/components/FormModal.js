import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';

class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      authed: false,

    };

    this.toggle = this.toggle.bind(this);
    this.authentication = this.authentication.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  authentication = () => {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;


    this.setState({
      modal: !this.state.modal,
    })

    
  
    fetch(`http://localhost:3000/users?username=${user}&&passsword=${pass}`)
      .then((data) => {
        console.log('we made it here, gurlllll', user, pass);
        console.log("data", data);
        return data.json();
      }).then((userArray) => {
        if (userArray.length === 0) {
          console.log("NO USERS");
          this.setState({
            fieldErrors: true
          });
        } 
        else {
          this.props.updateAuth(user);       
        }
      })
  };

  

  render() {
    return (
      <div className="form-modal">
        <Button id="log-btn" className="mx-2 btn-white" onClick={this.toggle}><a href="#">{this.props.buttonLabel}Sign In</a></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} id="log-modal">
          <ModalHeader toggle={this.toggle} className="modal-edges">Sign In</ModalHeader>
          <ModalBody>

            <form>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <input id="user" type="text" name="firstname" placeholder="Username" className="modal-input-field"></input>
                    <br/>
                    <input id="pass" type="text" name="firstname" placeholder="Password" className="modal-input-field"></input>
                  </div>
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter className="modal-edges">
            <Button color="secondary" onClick={this.authentication.bind(this)}>Submit</Button>{' '}
            {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default FormModal;