import React from "react";
import './Header.css'
import {Carousel, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

function Header(params) {
    const allcards = [
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.' },
        { title: 'Second Slide Label', discription: 'Some representative placeholder content for the first slide.' },
        { title: 'Third Slide Label', discription: 'Some representative placeholder content for the first slide.' },
    ]
    const allIcons = [
        { title: 'lable', src: 'type1.jpeg' },
        { title: 'lable', src: 'type2.jpeg' },
        { title: 'lable', src: 'type3.jpeg' },
        { title: 'lable', src: 'type4.jpeg' },
        { title: 'lable', src: 'type5.jpeg' },
        { title: 'lable', src: 'type6.jpeg' },
        { title: 'lable', src: 'type7.jpeg' },
        { title: 'lable', src: 'type8.jpeg' },
        { title: 'lable', src: 'type9.jpeg' },
        { title: 'lable', src: 'type10.jpeg' },
        { title: 'lable', src: 'type11.jpeg' },
        
    ]
    return (
        <>
            <Row className="justify-content-center mt-3">
                {allIcons.map((card) => {
                    return (
                        <Col md={1} className="mb-4 d-flex flex-column align-items-center text-center">
                            <img src={card.src} style={{ height: '1.75rem' }} alt={card.title} />
                            <div style={{ marginTop: '0.5rem' }}>{card.title}</div>
                        </Col>
                    )
                })}
            </Row>
            <div className="container">
                <div style={{ height:'100px', margin: 'auto' }}>
                <Carousel indicators={false} >
                    {allcards.map((item) => {
                        return (

                            <Carousel.Item>
                                <h1 className="text-center mb-1">{item.title}</h1>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                </div> 
            </div>
        </>


    )
}

export default Header;