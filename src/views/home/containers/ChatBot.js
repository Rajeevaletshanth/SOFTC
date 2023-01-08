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

import { BsFillChatDotsFill } from "react-icons/bs";

const OPENAI_API_KEY = "Bearer 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";

const ChatBot = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [loading, setLoading] = useState(false);
  let [obj, setObj] = useState({ choices: [] });

  const [payload, setPayLoad] = useState({
    prompt: "",
    temperature: 0.1,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    stop: [" Human:", " AI:"],
    model: "text-davinci-003",
    // n: 1,
  });

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
        url: "https://api.openai.com/v1/completions",
        data: payload,
        headers: {
          "Content-Type": "application/json",
          Authorization: OPENAI_API_KEY
        },
      })
        .then((res) => {
          console.log(res);
          responseHandler(res);
        })
        .catch((err) => {
          console.log(err)
          setLoading(false);
        });
    }
  };

  const responseHandler = (res) => {
    if (res.status === 200) {
      setObj(res.data);
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        className="support-button rounded-circle text-center"
        color="warning"
        onClick={toggle}
      >
        <BsFillChatDotsFill size={20} />
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="bg-warning ">
          <b className=" text-white">SOFTC Assistant </b> <text className="text-white" style={{fontSize:"13px"}}>(Beta)</text>
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
                    <span>loading...</span>
                  ) : (
                    obj?.choices?.map((v, i) => (
                      <ListGroupItem className="border-1">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-1">{v.text}</h6>
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

export default ChatBot;
