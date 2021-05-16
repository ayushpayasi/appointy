import React from 'react'

// components
import {Container,Row,Col,Button} from "reactstrap"

// scss
import "../assets/scss/pageheader.scss"

// assets
import headerimg from "../assets/Happy-educator-using-Educator-scheduling-software.svg"

export default function PageHeader() {
    return (
        <>
        <Container className="mb-5">
            <Row>
                <Col  className="header-textarea">
                    <h4>Education scheduling software to reduce admin work, increase efficiency, and deliver better results</h4>
                    <p>Save valuable teaching time with easy online appointments, class scheduling, student management, payments, automated reminders and web conferencing!</p>
                <Row>
                    <Col className="mt-5">
                        <Button className="headerbutton">Get Started Now!</Button>
                    </Col>
                </Row>
                <h6>No credit card required! Our free plan is free forever.</h6>
                </Col>
                <Col  className="header-imgarea">
                    <img src={headerimg} alt="header"/>
                </Col>
            </Row>
        </Container>
        </>
    )
}
