import React from 'react'

// stylesheet
import "../assets/scss/appointyintegrates.scss"

// components
import SectionHeading from "./sectionheading.component"
import { Container,Row,Col,Button } from 'reactstrap'

// assets
import banner from "../assets/1024.png"
import customWorkflowsImage from "../assets/Custom-workflows.svg"
import endToEndBrandingImage from "../assets/End-to-end-branding.svg"
import thirdPartyIntegrationsImage from "../assets/Third-party-integration.svg"
import dedicatedSupportImage from "../assets/Dedicated-support-team.svg"

const OnlineSchedulingSoftwareData = [
    {
        image:thirdPartyIntegrationsImage,
        heading:"Third-Party Integrations",
        para:`We build integrations with core
        systems that you work with every
        day to give you an all-in-one solution`
    },
    {
        image:endToEndBrandingImage,
        heading:"End-to-End Branding",
        para:`We offer custom-branded and white
        labelled solutions that match your
        brand image`
    },
    {
        image:customWorkflowsImage,
        heading:"Custom Workflows",
        para:`Our solution can be customized to
        cater to any specific scheduling
        needs of your company`
    },
    {
        image:dedicatedSupportImage,
        heading:"Dedicated Support",
        para:`Our support team will help on board
        and train your team, implement new
        features, troubleshoot, etc.`
    },
]

// custom content Fillers
const oneLineCardGenerator = (text)=>{
    return(
        <span className="one-line-card">{text}</span>
    )
}

const fillOnlineSchedulingSoftwareDetails =(item)=>{
    return(
        <Col className="align-center-column online-scheduling-software">
            <img src={item.image} alt={item.heading}></img>
            <h6>{item.heading}</h6>
            <p>{item.para}</p>
        </Col>
    )
}



export default function AppointyIntrgrates(props) {
    return (
        <>
        <Container>
            <SectionHeading
                heading={props.heading}
                subHeading={props.subHeading}
            />
            <Row>
                <Col className="align-center">
                   {oneLineCardGenerator(" Multiple Payment Apps")}
                </Col>
                <Col className="align-center">
                {oneLineCardGenerator("Personal & Work Calendar")}
                </Col>
                <Col className="align-center">
                {oneLineCardGenerator("Video Conferencing Apps")}
                </Col>
            </Row>
            </Container>
            
            <img className="banner-image" src={banner} alt="banner"/>
            <Container>
            <SectionHeading
                heading="Custom online scheduling software to fit the unique needs of
                universities, schools and tutoring centers"
                subHeading="We have designed tailor made scheduling software solutions for various educational institutes to help streamline their complex
                booking process"
            />
            <Row>
                {OnlineSchedulingSoftwareData.map(item=>fillOnlineSchedulingSoftwareDetails(item))}
            </Row>
            <Row>
                <Col className="align-center mt-5">
                    <Button outline className="ai-button"> Learn More</Button>
                </Col>
            </Row>
        </Container>
        </>
    )
}
