import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

import { BsFillEmojiHeartEyesFill } from "react-icons/bs";

const image_Ai = {
  prompt: "Dude coding in VR",
  n: 1,
  size: "1024x1024"
}


const ImageBot = () => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [loading, setLoading] = useState(false);
  let [obj, setObj] = useState({ choices: [] });

  const [payload, setPayLoad] = useState(image_Ai);

  const getResponse = () => {
    if (!payload.prompt) {
        setPayLoad({
            ...payload,
            prompt: "Start the conversation with the SOFTC AI assistant",
        });
    } else {
      setLoading(true);
      axios({
        method: "POST",
        url: "https://api.openai.com/v1/images/generations",
        data: payload,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
        }
      })
        .then((res) => {
          setPayLoad({
            ...payload,
            prompt: "",
          });
          responseHandler(res);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  const responseHandler = (res) => {
    if (res.status === 200) {
      console.log(res.data)
      setObj(res.data);
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        className="imageGen-button rounded-circle text-center bg-purple text-white"
        onClick={toggle}
      >
        <BsFillEmojiHeartEyesFill size={20} />
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="bg-warning ">
          <b className=" text-white">AI image generator </b> <text className="text-white" style={{fontSize:"13px"}}>(Beta)</text>
        </ModalHeader>
        <ModalFooter>
          <Input
            type="textarea"
            name="text"
            id="text"
            placeholder="Ask anything"
            readOnly={loading}
            onChange={(e) => {
              setPayLoad({
                ...payload,
                prompt: e.target.value,
              });
            }}
            value={payload.prompt}
          />
          <Button
            className="bg-warning text-white"
            disabled={loading}
            onClick={getResponse}
          >
            {loading ? "Loading... " : "Ask"}
          </Button>
        </ModalFooter>
        <ModalBody>
          <Container>
            <Row>
              <Col xs={12} style={{ minHeight: "300px" }}>
                <ListGroup>
                  {loading ? (
                    <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                    // <span>loading...</span>
                  ) : (
                    obj?.data?.map((v, i) => (
                      <ListGroupItem className="border-1">
                        <div className="d-flex w-100 justify-content-between">
                          {v.url && <img src={v.url} alt="" width={350} height={350}/>}
                          {/* <h6 className="mb-1">{v.url}</h6> */}
                        </div>
                      </ListGroupItem>
                    ))
                  )}
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ImageBot;
