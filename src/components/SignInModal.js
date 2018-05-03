import React from 'react';
import ReactDOM from 'react-dom';


class SignInModal extends React.Component {

    render() {

        return(
            // <div>test</div>
            <div>
                {/* <!-- Button trigger modal --> */}
                <button type="button" class="mx-2 btn-red" data-toggle="modal" data-target="#exampleModal" id="log-btn">
                Sign In
                </button>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="log-modal-label" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="log-modal-label">Sign In</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }



}

export default SignInModal;