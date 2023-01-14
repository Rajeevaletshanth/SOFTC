import React, { useState, useRef } from "react";
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
import '../../../assets/css/main.css'
import { BsFillChatDotsFill } from "react-icons/bs";
import { event } from "jquery";

const general_Ai = {
  prompt: "",
  temperature: 0.5,
  max_tokens: 100,
  top_p: 0.3,
  frequency_penalty: 0.5,
  presence_penalty: 0.0,
  stop: [" Human:", " AI:"],
  model: "text-davinci-003",
  // n: 1,
}

const sarcatic_Ai = {
  model:"text-davinci-003",
  prompt:"Marv is a chatbot that reluctantly answers questions with sarcastic responses.",
  temperature:0.5,
  max_tokens:60,
  top_p:0.3,
  frequency_penalty:0.5,
  presence_penalty:0.0
}


const ChatBot = () => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [loading, setLoading] = useState(false);
  let [obj, setObj] = useState({ choices: [] });
  const [messages, setMessages] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(1000);

  const [payload, setPayLoad] = useState(general_Ai);
  const scrollRef = useRef(null);

  const getResponse = () => {
    if (!payload.prompt) {
        setPayLoad({
            ...payload,
            prompt: "",
        });
    } else {
      setScrollPosition(scrollPosition + 100);
      setMessages(s => {
        return[
          ...s,{
            user: "User",
            message: payload.prompt
          }
        ]
      })
      setLoading(true);
      axios({
        method: "POST",
        url: "https://api.openai.com/v1/completions",
        data: payload,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
        }
      })
        .then((res) => {
          setScrollPosition(scrollPosition + 100);
          setMessages(s => {
            return[
              ...s,{
                user: "Assistant",
                message: res.data.choices[0].text
              }
            ]
          })
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
      console.log(messages)
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
        
        <ModalBody>
          <Container>
            <Row>
              <Col xs={12}  ref={scrollRef} style={{ minHeight: "300px",maxHeight: "300px", overflow: "auto", scrollTop: scrollPosition }}>
                <ListGroup>
                    {messages?.map((item, i) => (
                      <ListGroupItem className="border-0 mb-0">
                        <div className={item.user==="Assistant"? "float-left":"float-right"} style={{maxWidth:"300px"}}>
                          <h6 className="mb-1 py-1 px-3 rounded " style={{backgroundColor: item.user==="Assistant"? "#f4f5f7" : "#ff4c2340"}}>{item.message}</h6>
                        </div>
                      </ListGroupItem>
                    ))}
                </ListGroup>
              </Col>
            </Row>
          </Container>
          {loading && <Row className="bg-secondary rounded rounded-lg d-flex justify-content-center px-2" style={{width:"110px"}}>
            Typing 
            <div className="row ml-1 mt-2 pr-2">
            <div class="d-flex justify-content-center text-xs">
              <div class="spinner-grow" role="status" style={{width:".50rem",height:".50rem"}}> </div>
            </div>
            <div class="d-flex justify-content-center text-xs">
              <div class="spinner-grow" role="status" style={{width:".50rem",height:".50rem"}}> </div>
            </div>
            <div class="d-flex justify-content-center text-xs">
              <div class="spinner-grow" role="status" style={{width:".50rem",height:".50rem"}}> </div>
            </div>
            </div>
          </Row>}
        </ModalBody>
        
        <ModalFooter>
          <Input
            type="text"
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
      </Modal>
    </div>
  );
};

export default ChatBot;
