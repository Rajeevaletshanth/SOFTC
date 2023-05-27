import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import axios from 'axios';

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
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

const Careers = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    // console.log(file)
    const formData = new FormData();
    formData.append('name', "alex");
    formData.append('email', "abc@gmail.com");
    formData.append('phone', "123456789");
    // formData.append('resume', file);
    try {
      const response = await axios.post('http://localhost:5005/resume/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <DemoNavbar />
      <main>
        <section className="section section-lg bg-gradient-default">
          <Container className="pt-lg pb-300">
            <Row className="text-center justify-content-center">
              <Col lg="10">
                <h2 className="display-3 text-white">Build something</h2>
                <p className="lead text-white">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice.
                </p>
              </Col>
            </Row>
            <Row className="row-grid mt-5">
              <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-settings text-primary" />
                </div>
                <h5 className="text-white mt-3">Building tools</h5>
                <p className="text-white mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Col>
              <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-ruler-pencil text-primary" />
                </div>
                <h5 className="text-white mt-3">Grow your market</h5>
                <p className="text-white mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Col>
              <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-atom text-primary" />
                </div>
                <h5 className="text-white mt-3">Launch time</h5>
                <p className="text-white mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <section className="section section-lg pt-lg-0 section-contact-us">
          <Container>
            <Row className="justify-content-center mt--300">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Want to work with us?</h4>
                    <p className="mt-0">
                      Your project is very important to us.
                    </p>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Your name" type="text" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email address" type="email" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-mobile-button" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Phone No" type="text" />
                      </InputGroup>
                    </FormGroup>

                    <FormGroup className="mb-4">
                      <Input
                      className="form-control"
                        type="file"
                        onChange={handleFileUpload}
                        accept="application/pdf"
                      />
                    </FormGroup>

                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <Download /> */}
      </main>
      <CardsFooter />
    </>
  );
};

export default Careers;

// import React, { useState } from 'react';
// import { useDropzone } from 'react-dropzone';

// function MyDropzone() {
//   const [files, setFiles] = useState([]);
//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop: acceptedFiles => {
//       setFiles(acceptedFiles.map(file => Object.assign(file, {
//         preview: URL.createObjectURL(file)
//       })));
//     }
//   });

//   const handleUpload = () => {
//     const formData = new FormData();
//     files.forEach(file => {
//       formData.append('file', file);
//     });

//     fetch('https://softc-backend.herokuapp.com/uploadSingle', {
//       method: 'POST',
//       body: formData
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//       });
//   }

//   return (
//     <div {...getRootProps()}>
//       <input {...getInputProps()} />
//       <p>Drag 'n' drop some files here, or click to select files</p>
//       <aside>
//         {files.map(file => (
//           <img key={file.name} src={file.preview} alt={file.name} width="100" height="100" />
//         ))}
//       </aside>
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// }

// export default MyDropzone;