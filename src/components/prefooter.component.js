import React from 'react'


// components
import SectionHeading from "./sectionheading.component"
import {Container,Row,Col} from "reactstrap"


// stylesheet
import "../assets/scss/appointyusedworldwide.scss"

// assets
import ratingImg1 from "../assets/Artboard-1-copy-1-min.png"
import ratingImg2 from "../assets/Artboard-1-copy-2-1-min.png"
import ratingImg3 from "../assets/Appointy-Google-review-min.png"
import ratingImg4 from "../assets/Apointy-G2-300x100-1-1-min.png"

// pom means Peace Of Mind Cards
import pomImg1 from "../assets/Super-Support-20.svg"
import pomImg2 from "../assets/Multi-Location-Management-2.svg"
import pomImg3 from "../assets/Free-setup-assistance-and-Easy-Migration-2.svg"
import pomImg4 from "../assets/Security-2.svg"


const data =[
    {
    para:`Appointy gives our students a fast and efficient way to
    book their sessions. It has completely eliminated missed
    appointments, human typos, back-and-forth emails and
    more issues like these for us. We can now control almost
    every single aspect of the booking process and our admin
    team has more time available to talk to students and for
    other tasks. This has improved our customer satisfaction
    rate. We've got so many new students with a positive
    word of mouth about our business!
    `,
    by:"- Chyntia P., Counselor, Education Management"
    },{
    para:`Appointy has helped our appointment system become
    much easier and less work. We have more accurate data
    on daily and sales report. And it is easier to track the
    appointment status. It is very customizable and suits to
    your company needs. And the customer service is
    excellent!! Their live chat ready to answer your questions
    within seconds.`,
    by:"- Owner, BeMo Academic Consulting"
    }
]

const ratingData = [
    {image:ratingImg1},
    {image:ratingImg2},
    {image:ratingImg3},
    {image:ratingImg4},
]

const peaceOfMindCardData = [
    {image:pomImg1,heading:"Super Support",para:`Appointy is supported by a team of dedicated
    professionals who are always available via email,
    chat and phone.`},
    {image:pomImg2,heading:"Multi-Location Management",para:`Our education software caters to all types of
    education institutions. If you have multiple centers
    and campuses, Appointy allows easy
    management of all your locations from a
    centralized admin portal`},
    {image:pomImg3,heading:"Free Setup Assistance & Easy Migration",para:`With a quick onboarding and free personalized
    setup assistance from product experts who have
    onboarded several educators, you get started with
    Appointy in no time. Need to shift from your existing
    system? Just let us know. We take care of
    everything!`},
    {image:pomImg4,heading:"Security",para:`We take customer data security very seriously.
    Your data is safe, backed-up on cloud, and you
    retain its complete ownership. Our application is
    hosted on Google Cloud which adheres to the
    highest standards of reliability and data security.`},
]

const oneLineCardGenerator = (text)=>{
    return(
        <span className="one-line-card">{text}</span>
    )
}

const commentFiller =(obj)=>{

    return(
        <Col>
            <div className="comment-card">
                <p>{obj.para}</p>
                {oneLineCardGenerator(obj.by)}
            </div>
        </Col>
    )
}

const ratingFiller =(obj)=>{
    return(
        <Col className="rating-holder">
            <img src={obj.image} alt="rating"></img>
        </Col>
    )

}

const peaceOfMindCardGenerator =(obj)=>{
    return(
        <Col xs="6">
            <div className="peace-of-mind-card">
            <Row>
                <Col xs="3">
                    <img src={obj.image} alt={obj.heading} />
                </Col>
                <Col xs="9">
                    <h6>{obj.heading}</h6>
                    <p>{obj.para}</p>
                </Col>
            </Row>
            </div>
        </Col>
    )
}

export default function PreFooter(props) {
    return (
        <>
        <Container>  
        <SectionHeading
            heading="23,000+ educators and institutes use Appointy worldwide"
        />
        <Row>
                {data.map(item=>commentFiller(item))}
        </Row>
        <Row>
            {ratingData.map(item=>ratingFiller(item))}
        </Row>
        </Container>
        <Container fluid className="peace-of-mind-holder">
        <Row><Col></Col></Row>
        <SectionHeading
            heading="Your peace of mind is our top priority!"
        />
            <Container className="pl-5 pr-5 pb-5">
                <Row>
                    {peaceOfMindCardData.map(item=>peaceOfMindCardGenerator(item))}
                </Row>
            </Container>
        </Container>
        </>
    )
}
