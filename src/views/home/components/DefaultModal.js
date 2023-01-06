import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col,
} from "reactstrap";

class DefaultModal extends React.Component  {
  state = {};
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  render() {
    return (
      <>
        <Button
          block
          className="mb-3 p-3"
          color={this.props.btnType?this.props.btnType:"primary"}
          type="button"
          onClick={() => this.toggleModal("defaultModal")}
        >
          {this.props.name}
        </Button>
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.defaultModal}
          toggle={() => this.toggleModal("defaultModal")}
        >
          <div className="modal-header">
            <h6 className="modal-title" id="modal-title-default">
              Type your modal title
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("defaultModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
          <div className="modal-footer">
            <Button color="primary" type="button">
              Save changes
            </Button>
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("defaultModal")}
            >
              Close
            </Button>
          </div>
        </Modal>
      </>
    );
  }
}

export default DefaultModal;
