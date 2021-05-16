import React from 'react'
// import "../assets/scss/academicsec.scss"
import {Container,Col,Row} from "reactstrap"
// import "../assets/scss/academicsec.scss"
import SectionHeading from "./sectionheading.component"


// assets
import academicSecImg1 from "../assets/Connect-with-students.svg"
import academicSecImg2 from "../assets/Booking-convenience.svg"
import academicSecImg3 from "../assets/Better-student-experience.svg"

import detailsSecImg1 from "../assets/Instagram-profile-with-book-button-and-booking-page-with-various-subjects.svg"
import detailsSecImg2 from "../assets/Appointment-confirmation-page-and-zoom-meeting-window.svg"
import detailsSecImg3 from "../assets/Portal-with-student-database.svg"


const academicSecData = [
    {
        image:academicSecImg1,
        heading:"Connect with prospective students easily",
        para:"Admission offices can make their services easily accessible and enroll new students",
    },
    {
        image:academicSecImg2,
        heading:"Give students more booking convenience",
        para:"Avoid any coordination hassles and let students easily schedule appointments & classes with you",
    },
    {
        image:academicSecImg3,
        heading:"Deliver better student experience",
        para:"Store important student details that you can use to plan out your advising sessions & classes",
    }
]


const fillAcademicSecCard = (obj)=>{

    return(
        <Col className="p-5">
            <Row>
                <Col xs="2">
                    <img src={obj.image} alt={obj.heading}/>
                </Col>
                <Col xs="10">
                    <h6>{obj.heading}</h6>
                </Col>
            </Row>
            <p>{obj.para}</p>
        </Col>
                            
    )

}

export default function AcademicDetails() {
    return (
        <>
            <Container className="">
                <SectionHeading 
                    heading="All-in-one education scheduling software that helps you achieve all your academic and business goals"
                    subHeading="Appointy's education software takes the friction out of your scheduling process and helps you grow your teaching business or institute while keeping students as the top priority"
                />
                <Row>
                <Col className="mt-5 align-center">
                    <div className="academicsec-card">
                        <Row>
                            {academicSecData.map(item=>fillAcademicSecCard(item))}
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className="details-section mt-5">
                <Col>
                    <h6>
                    Make it easier for students to find and book 1:1 career counselling and academic advising sessions
                    </h6>
                    <p>
                    <span>Branded online booking system:</span> Create a professional, multi-lingual booking
                    website for your university or institute. Customize it to match your brand - add
                    a logo, services or classes you offer, staff portfolios, campus maps, etc. to
                    ensure that applicants can schedule with the right staff for them.
                    </p>
                    <p>
                    <span>Multi-channel bookings:</span> Share your booking link with students in emails, texts,
                    brochures, etc. or let them book campus tours and interviews directly from your
                    website with Appointy's website integration.
                    </p>
                    <p>
                    Add a 'book now' button your institute's Facebook and Instagram profiles to
                    connect with new students and give them an option to book an admission
                    assistance call instantly.
                    </p>
                </Col>
                <Col>
                    <img src={detailsSecImg1} alt="img"/>
                </Col>
            </Row>
            <Row className="details-section">
                <Col>
                <img src={detailsSecImg2} alt="img"/>
                </Col>
                <Col>
                    <h6>Eliminate the scheduling back and forth to empower students to
                    reach out whenever they need you</h6>
                    <p><span>24x7 online scheduling: </span>Students can easily find a time that works for them
                    and book a session or sign-up for recurring classes on their own. Confirmed
                    appointments are added to your calendar so that you're never double booked!</p>
                    <p><span>Intelligent timezone detection:</span> Help students & applicants around the globe
                    and ensure that everyone who wants to schedule with you can view your
                    availability in their timezone.</p>
                    <p><span>Web conferencing: </span>Offer students to schedule virtual courses, classes and
                    admission counselling with Appointy's Zoom integration. Automatically send a
                    Zoom meeting or class link in scheduling notifications so that students can join
                    your virtual classroom with just a click!
</p>
                </Col>
            </Row>
            <Row className="details-section">
                <Col>
                    <h6>Personalize sessions based on student's needs and elevate their experience & satisfaction</h6>
                    <p><span>Dedicated student profiles:</span> Collect important student information like contact
                    details, classes attended, payments, etc. under student profiles. Use notes to
                    make quick remarks about weak subjects, career analysis, etc. to communicate
                    progress reports to parents regularly.</p>
                    <p><span>Intake forms:</span> Collect crucial info at the time of enrollment using our intake
                    forms to prepare better lesson plans and consultation notes before your
                    sessions.</p>
                    <p><span>Online Reputation Management:</span> Automatically request reviews from happy
                    parents and students after a session. Promote these positive reviews on your
                    social media and display them on your booking page with just a click.</p>
                </Col>
                <Col>
                    <img src={detailsSecImg3} alt="img"/>
                </Col>
            </Row>
            </Container>
        </>
    )
}
