import { Button, Card, Row, Col, Figure } from 'react-bootstrap';

const MainSection = () => {
    const allcards = [
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src: 'CapitalCasaLogo.png' },
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src: 'img1.jpg' },
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src: 'bed.jpg' },
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src: 'bed2.jpg' },
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src: 'bed2.jpg' },
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src: 'img1.jpg' },
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src: 'img1.jpg' },
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src: 'img1.jpg' },
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src: 'img1.jpg' },
    ]
    return (
        <>
            <Row className="justify-content-center text-center" style={{ width: '100%' }}>
                {allcards.map((card) => {
                    return (
                        // <Col md={4} className="mb-4 d-flex justify-content-center">
                        //     <Card className="mt-4" style={{ width: '18rem' }}>
                        //         <Card.Img variant="top" src={card.src} />
                        //         <Card.Body>
                        //             <Card.Title>{card.title}</Card.Title>
                        //             <Card.Text>
                        //                 {card.discription}
                        //             </Card.Text>
                        //             <Button variant="primary">Go somewhere</Button>
                        //         </Card.Body>
                        //     </Card>
                        // </Col>
                        
                            <Col md={4}>
                                <Figure style={{boxShadow: '2px 2px 5px 0px #c237', marginBottom: '3rem', width: '100%', marginLeft: '12px'}}>
                                    <Figure.Image
                                        width={300}
                                        height={300}
                                        alt="300x300"
                                        src={card.src}
                                        style={{ height: '13rem', objectFit: 'cover', width: '100%' }}
                                    />
                                    <Figure.Caption>
                                        {card.title}
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                    )
                })}
            </Row></>
    )
}
export default MainSection