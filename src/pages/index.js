import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import './../fonts/fonts.css'
import './../css/style.css'
import honey1 from './../images/honey1.jpg'
import honey2 from './../images/honey2.jpg'
import honey3 from './../images/honey3.jpg'
import honey4 from './../images/honey4.jpg'
import soundcloud from './../images/soundcloud.jpg'
import youtube from './../images/youtube.jpg'

const IndexPage = () => (
    <div className="full-page">
        <Container>
            <Row style={{height: '50%'}}>
                <Col className="main-box">
                    <span className="main-title">Honey Morante</span>

                    <span className="main-sub-title">Thespian | Singer | Songwriter | Teacher | Ukulele Player</span>
                </Col>
                <Col className="img-parent" style={{height: '100%'}}>
                    <img src={honey1} />
                </Col>
                <Col className="img-parent">
                    <a href="https://www.youtube.com/user/honzM11" style={{height: '100%'}}>
                    <img src={youtube} style={{backgroundColor: '#e8c7cc', objectFit: 'contain'}}/>
                    </a>
                </Col>
            </Row>
            <Row style={{height: '50%'}}>
                <Col className="img-parent">
                    <img src={honey3}/>
                </Col>
                <Col style={{height: '100%'}}>
                    <Row style={{height: '50%'}} className="img-parent">
                        <a href="https://soundcloud.com/honeymorante" style={{height: '100%'}}>
                        <img src={soundcloud}  /></a>
                    </Row>
                    <Row style={{height: '50%'}} className="img-parent">
                        <img src={honey2} />
                    </Row>
                </Col>
                <Col style={{height: '100%'}}>
                    <Row style={{height: '50%'}} className="img-parent">
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
