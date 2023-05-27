import React, { useCallback, useState, useEffect } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import axios from 'axios';
import { useHistory } from "react-router-dom";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter";

function generateRandomId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  const timestamp = Date.now().toString();
  let randomId = timestamp;
  
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }
  
  return randomId;
}



const VideoConference = () => {
  const history = useHistory();
    
  const handleJoinRoom = useCallback(() => {
    let id = generateRandomId()
    history.push(`/room/${id}`)
  },[history])

 
  return (
    <>
      {/* <DemoNavbar /> */}
      <main>
        <section className="section section-lg">
          <Container className="pt-lg pb-200">
            <Row className="text-center justify-content-center">
              <Col lg="12">
                
                <img src={require("../../assets/img/chatr/Light Logo.png")} alt="" width={200} />
                <h2 className="display-4">Connect, Collaborate, and Communicate Anywhere with Chatr</h2>
                <p className="text-sm">
                Stay connected and collaborate effortlessly with Chatr - the simple video conference app powered by <b className="text-primary">SOFTC</b>. Enjoy high-quality video, interactive screen sharing, and real-time chat for seamless virtual meetings.
                </p>
              </Col>
            </Row>
            <div className="text-center justify-content-center mt-5">
              <Button className="bg-success text-white p-3" onClick={handleJoinRoom}>Start New Meeting</Button>
            </div>
            
            {/* <Row className="row-grid mt-5">
              <Col lg="3">
                    <Button className="bg-success text-white">Start New Meeting</Button>
              </Col>
              <Col lg="1" className="mt-2">
                    <b>Or</b>
              </Col>
              <Col lg="4">
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Enter meeting code" type="text" onChange={(e) => setRoomNo(e.target.value)}/>
                      </InputGroup>
                    </FormGroup>
              </Col>
              <Col lg="2">
                    <Button className="bg-success text-white" onClick={handleJoinRoom}>Join</Button>
              </Col>
            </Row> */}
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default VideoConference;
