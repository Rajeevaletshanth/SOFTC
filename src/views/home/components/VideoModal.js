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

class VideoModal extends React.Component {
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
          className="btn-icon mb-3 mb-sm-0"
          color={this.props.btnType ? this.props.btnType : "primary"}
          size="lg"
          type="button"
          onClick={() => this.toggleModal("videoModal")}
        >
          <span className="btn-inner--icon mr-1">
            <i className="fa fa-play" />
          </span>
          <span className="btn-inner--text">
            {this.props.name}
          </span>
        </Button>
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.videoModal}
          toggle={() => this.toggleModal("videoModal")}
          size="xl"
          style={{ width: "100%" }}
        >
          {/* <div className="modal-header">
            <h6 className="modal-title" id="modal-title-default">
              Type your modal title
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("videoModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div> */}
          <div className="modal-body text-center">
            <video
              width="100%"
              height="100%"
              autoPlay
              controls
              src={require("../../../assets/img/advertisements/intro.mp4")}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {/* <div className="modal-footer">
            <Button color="primary" type="button">
              Save changes
            </Button>
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("videoModal")}
            >
              Close
            </Button>
          </div> */}
        </Modal>
      </>
    );
  }
}

export default VideoModal;
