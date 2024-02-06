import React from "react";
import "./App.css";
import pic from "./assets/IMG_2594.jpeg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by John Fulkerson.
            </header>
            <Container>
                <Row>
                    <Col>
                        <img src={pic} alt="John Fulkerson's Headshot" />
                        <div
                            style={{
                                width: "100px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <h2>My hobbies include</h2>
                        <ul>
                            <li>Sailing</li>
                            <li>Scuba Diving</li>
                            <li>Mountain Biking</li>
                            <li>Coffee</li>
                        </ul>
                        <div
                            style={{
                                width: "100px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Hello World, Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
        </div>
    );
}

export default App;
