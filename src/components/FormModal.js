import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';

class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      authed: false,
      user: null,
      pass: null
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
    let user = parseInt(document.getElementById("user").value);
    let pass = parseInt(document.getElementById("pass").value);

    this.setState({
      modal: !this.state.modal,
      user: user,
      pass: pass
    })

    // if(user = "Chaddd") {
    //   if (pass = "getgot") {
    //     console.log("you're authed")
        
    //     this.setState({
    //       authed: true
    //     })

    //     this.props.updateAuth(user);
    //   }
    // }

    // this is the code that it needs to be
    fetch(`http://localhost:3000/profiles?first_name=${this.state.user}&&password=${this.state.password}`)
      .then((data) => {
        this.props.updateAuth(user);        
        return data.json();
      })
      
  //     .then((userArray) => {
  //       if (userArray.length === 0) {
  //         console.log("NO USERS");
  //         this.setState({
  //           fieldErrors: true
  //         });
  //       } 
  //       else {
  //         this.setState({
  //           user: userArray[0],
  //           userAuthed: true,
  //           fields: {
  //             email: '',
  //             password: ''
  //           }
  //         });
  //       }
  //       console.log(this.state.user);
  //     })
  //   evt.preventDefault();
  // };

  }

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