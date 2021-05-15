import React from 'react'
import {Container,Row,Col} from "reactstrap"
import SectionHeading from "./heading.component"

// stylesheet
import "../assets/scss/academicsec.scss"





const fillColumns =(obj)=>{
    return(
        <Col xs="3">
            <div className="institution-info">
                <img src={obj.image} alt={obj.heading}></img>
                <h6>{obj.heading}</h6>
                <p>{obj.para}</p>
            </div>
        </Col>
    )
}

export default function AcademicSec(props) {
    return (
    <>
        <Container>
            <SectionHeading
                heading={props.heading}
                subHeading={props.subHeading}
            />
            <Row>
                    {props.data.map(item=>fillColumns(item))}
            </Row>
        </Container>
        
    </>
    )
}
