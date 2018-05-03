import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';

class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
                    <input type="text" name="firstname" placeholder="Username" className="modal-input-field"></input>
                    <br/>
                    <input type="text" name="firstname" placeholder="Password" className="modal-input-field"></input>
                  </div>
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter className="modal-edges">
            <Button color="secondary" onClick={this.toggle}>Submit</Button>{' '}
            {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default FormModal;