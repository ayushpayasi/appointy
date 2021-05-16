import React from 'react'

// components
import {Row,Col} from "reactstrap"

export default function SectionHeading(props) {
    return (
        <Row className="academic-header ">
            <Col>
                <h4>
                    {props.heading}
                </h4>
                <p>
                    {props.subHeading}
                </p>
            </Col>
        </Row>
    )
}
