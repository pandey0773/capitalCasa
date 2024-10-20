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
        <div>
            <img src="CapitalCasaLogo.png" style={{position: 'absolute', top:'-6%', height:'11rem'
            }}/>
        </div>
        <Row style={{marginTop: '2rem'}}>
            <Col md={4}>
            </Col>
            <Col md={4}>
            <Row className="justify-content-center" style={{ border: '0.1px solid', borderRadius: '14px', boxShadow:' 4px 4px 9px 2px #7823', height: '3rem'}}>
                <Col md={4}>fie</Col>
                <Col md={4}>tie</Col>
                <Col md={4}>ere</Col>
            </Row>
            </Col>
            <Col md={4} className="mb-4 d-flex flex-column align-items-right text-center">
            <h2>dcskj vdk </h2>
            </Col>
        </Row>
            <Row className="justify-content-center" style={{marginTop: '4rem'}}>
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