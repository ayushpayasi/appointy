import React from 'react'
import {Container,Col,Row,Button} from "reactstrap"
import SectionHeading from "../components/heading.component"
import "../assets/scss/footer.scss"

import footerImg from "../assets/Footer-Element.png"

export default function Footer() {
    return (
        <>  <Container>
            <SectionHeading
                heading="Try Appointy's education scheduling software. Get your free account now!"
            />
            <Row>
                <Col className="align-center-column">
                    <Button className="footer-gradient-button">Sign up now! →</Button>
                    <p className="footer-button-text">No credit card required! Our free plan is free forever.</p>
                </Col>
            </Row>
            
            </Container>
            <img className="footer-image" src={footerImg} alt="footerimg"/>
            <Container fluid className="footer-bar">
                <Row>
                    <Col>
                        <h6>PRODUCT</h6>
                        <ul>
                            <li>Home</li>
                            <li>Customers </li>
                            <li>Contact us</li>
                            <li>Blog</li>
                            <li>Pricing</li>
                            <li>Sign Up</li>
                        </ul>
                    </Col>
                    <Col><h6>FEATURES</h6>
                    <ul>
                        <li>Schedule online</li>
                        <li>Increase productivity</li>
                        <li>Attract customers</li>
                        <li>Retain customers</li>
                    </ul>
                    </Col>
                    <Col>
                    <h6>SUPPORT</h6>
                    <ul>
                        <li>Help</li>
                        <li>Screen sharing</li>
                        <li>Affiliate Program</li>
                    </ul>
                    </Col>
                    <Col>
                        <h6>CONTACT US</h6>
                        <ul>
                            <li>Appointy Software Inc., 16 Corning
                                Ave, Suite 136, Milpitas, CA 95035</li>
                                <li>contact@appointy.com</li>
                                <li>Privacy policy</li>
                                <li>Terms of use</li>
                                <li>GDPR</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="bottom-footer"><p>Copyright 2020 © Appointy. All rights reserved.</p></div>
        </>
    )
}
