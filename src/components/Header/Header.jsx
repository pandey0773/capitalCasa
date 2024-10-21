import React from "react";
import './Header.css'
import { Carousel, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

function Header(params) {
    const allcards = [
        { title: 'Welcome to Capital Casa', discription: 'Some representative placeholder content for the first slide.' },
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
    const iconsDesign = {
        marginTop: '1rem',
        position: 'sticky',
        top: '0%',
        background: '#fffcfc',
        zIndex: '1',
        paddingTop: '10px',
        boxShadow: '-1px 4px 4px 0px #cac5c5',
        width:'100%',
        margin: 'auto'
    }

return (
    <>
        <div>
            <img src="CapitalCasaLogo.png" style={{
                position: 'absolute', top: '-6%', height: '11rem'
            }} />
        </div>
        <Row style={{ marginTop: '2rem', width:'100%' }}>
            <Col md={4}>
            </Col>
            <Col md={4}>
                <Row className="justify-content-center" style={{ border: '0.1px solid', borderRadius: '14px', boxShadow: ' 0px 3px 6px 0px', height: '3rem', textAlign:'center', paddingTop:'12px' }}>
                    <Col md={4}><h6>Rooms</h6></Col>
                    <Col md={4}><h6>Banquet Halls</h6></Col>
                    <Col md={4}><h6>Party Venu</h6></Col>
                </Row>
            </Col>
            <Col md={4} className="mb-4 d-flex flex-column align-items-right text-center">
                <h2>dcskj vdk </h2>
            </Col>
        </Row>
        <hr></hr>
        <Row className="justify-content-center" style={iconsDesign}>
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
            <div style={{ height: '75px', marginTop: '12px' }}>
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