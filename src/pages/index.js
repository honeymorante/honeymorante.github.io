import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import './../fonts/fonts.css'
import './../css/style.css'
import honey1 from './../images/honey1.jpeg'
import honey2 from './../images/honey2.jpg'
import honey3 from './../images/honey3.jpg'
import honey4 from './../images/honey4.jpg'
import soundcloud from './../images/soundcloud.png'
import youtube from './../images/youtube.jpeg'

const IndexPage = () => (
    <div className="full-page">
        <Container>
            <Row style={{height: '50%'}}>
                <Col className="main-title">
                    Honey Morante
                </Col>
                <Col>
                    <img src={honey1} />
                </Col>
                <Col><a href="https://www.youtube.com/user/honzM11"><img src={youtube} /></a>
                </Col>
            </Row>
            <Row style={{height: '50%'}}>
                <Col>test
                    <img src={honey3}/>
                </Col>
                <Col>
                    <Row style={{height: '50%'}}>
                        <a href="https://soundcloud.com/honeymorante"><img src={soundcloud} /></a>
                    </Row>
                    <Row style={{height: '50%'}}>
                        <img src={honey2} />
                    </Row>
                </Col>
                <Col>
                    <Row style={{height: '50%'}}>
                        <img src={honey4} />
                    </Row>
                    <Row style={{height: '50%', textAlign: 'center', backgroundColor: '#e8c7cc'}}>
                        <span style={{margin: '0 auto'}}>Blog - coming soon</span>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
);
export default IndexPage
