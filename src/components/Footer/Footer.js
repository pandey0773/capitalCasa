import React from "react";
import {Row, Col } from 'react-bootstrap';


const Footer = ()=>{
return(
    <><div style={{backgroundColor: '#f8f9fa', height: '23rem', padding: '5rem'}}>
    <Row style={{ width:'100%' }}>
        <Col className="col-lg-2 mb-3">
        <h5>About</h5>
        <ul className="list-unstyled">
            <li className="mb-2">Capital Casa</li>
            <li className="mb-2">Capital Casa</li>
            <li className="mb-2">Capital Casa</li>
            <li className="mb-2">Capital Casa</li>
            <li className="mb-2">Capital Casa</li>
        </ul>
        </Col>
        <Col className="col-6 col-lg-3 offset-lg-1 mb-3">
        <h5>Reception contact</h5>
        <ul className="list-unstyled">
            <li className="mb-2">Capital Casa</li>
            <li className="mb-2">Capital Casa</li>
            <li className="mb-2">Capital Casa</li>
            <li className="mb-2">Capital Casa</li>
            <li className="mb-2">Capital Casa</li>
        </ul>
        </Col>
        <Col className="col-6 col-lg-2 offset-lg-1 mb-3">
        <h5>Manager 1st</h5>
        <ul className="list-unstyled">
            <li className="mb-2">Capital Casa</li>
            <li className="mb-2">Capital Casa</li>
            <li className="mb-2">Capital Casa</li>
            <li className="mb-2">Capital Casa</li>
            <li className="mb-2">Capital Casa</li>
        </ul>
        </Col>
        <Col className="col-6 col-lg-2 offset-lg-1 mb-3">
        <h5>Manager 2nd</h5>
        <ul className="list-unstyled">
            <li className="mb-2">Capital Casa</li>
            <li className="mb-2">Capital Casa</li>
            <li className="mb-2">Capital Casa</li>
            <li className="mb-2">Capital Casa</li>
            <li className="mb-2">Capital Casa</li>
        </ul>
        </Col>
    </Row>
    </div>
    </>
)
}

export default Footer;