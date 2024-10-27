import React from "react";
import './Header.css'
import { Carousel, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CurrentDateTime from "../CurrentDateTime/CurrentDateTime";

function Header(params) {
    const allcards = [
        { title: 'Welcome to Capital Casa', discription: 'Some representative placeholder content for the first slide.' },
        { title: 'Second Slide Label', discription: 'Some representative placeholder content for the first slide.' },
        { title: 'Third Slide Label', discription: 'Some representative placeholder content for the first slide.' },
    ]
    const allIcons = [
        { title: 'About', src: 'type1.jpeg',link:'/about' },
        { title: 'Party', src: 'balloon.svg',link:'' },
        { title: '360 view', src: 'location-outline.svg',link:'https://www.google.com/maps/place/AL%2F1%2FB%2F1,+Street+No.15,+AL+Block(Newtown),+Action+Area+I,+Newtown,+New+Town,+West+Bengal+700156/@22.5777902,88.4514682,3a,75y,198.74h,90t/data=!3m7!1e1!3m5!1snVE_mUI1ewoRtyXHjXleTA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DnVE_mUI1ewoRtyXHjXleTA%26yaw%3D198.73537!7i13312!8i6656!4m6!3m5!1s0x3a0275106c5549ad:0x5a559bb9562e6f66!8m2!3d22.5776412!4d88.4514225!16s%2Fg%2F11j7n9pcjm?coh=205410&entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D' },
        { title: 'lable', src: 'type4.jpeg',link:'' },
        { title: 'Gallary', src: 'images-outline.svg',link:'/' },
        { title: 'Break Fast', src: 'cafe-outline.svg',link:'/breakFast' },
        { title: 'Food', src: 'restaurant-outline.svg',link:'/food' },
        { title: 'location', src: 'trail-sign-outline.svg',link:'' },
        { title: 'street', src: 'walk-outline.svg',link:'' },
        { title: 'contact', src: 'people-outline.svg',link:'' },
        { title: 'Transport', src: 'car-sport-outline.svg',link:'' },

    ]
    const iconsDesign = {
        marginTop: '1rem',
        position: 'sticky',
        top: '0%',
        background: '#fffcfc',
        zIndex: '1',
        paddingTop: '10px',
        boxShadow: '-1px 4px 4px 0px #cac5c5',
        width: '100%',
        margin: 'auto'
    }

    return (
        <>
            <div>
                <img src="CapitalCasaLogo.png" style={{
                    position: 'absolute', top: '-7%', height: '12rem', width: '15rem'
                }} />
            </div>
            <Row style={{ marginTop: '2rem', width: '100%' }}>
                <Col md={4}>
                </Col>
                <Col md={4}>
                    <Row className="justify-content-center" style={{ border: '0.1px solid', borderRadius: '14px', boxShadow: ' 0px 3px 6px 0px', height: '3rem', textAlign: 'center', paddingTop: '12px' }}>
                        <Col md={4}><h6>Rooms</h6></Col>
                        <Col md={4}><h6>Banquet Halls</h6></Col>
                        <Col md={4}><h6>Party Venu</h6></Col>
                    </Row>
                </Col>
                <Col md={4} className="mb-4 d-flex flex-column align-items-right text-center">
                    {<CurrentDateTime/>}
                </Col>
            </Row>
            <hr></hr>
            <Row className="justify-content-center" style={iconsDesign}>
                {allIcons.map((card) => {
                    return (
                        <Col md={1} className="mb-4 d-flex flex-column align-items-center text-center">
                            <Link to={card.link} className="text-decoration-none">
                                <img src={card.src} style={{ height: '1.75rem' }} alt={card.title} />
                                <div style={{ marginTop: '0.5rem' }}>{card.title}</div>
                            </Link>
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