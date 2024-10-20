import { Button, Card, Row, Col } from 'react-bootstrap';

const MainSection =()=> {
    const allcards = [
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src:'CapitalCasaLogo.png' },
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src:'img1.jpg' },
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src:'img1.jpg' },
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src:'img1.jpg' },
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src:'img1.jpg' },
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src:'img1.jpg' },
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src:'img1.jpg' },
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src:'img1.jpg' },
        { title: 'First Slide Label', discription: 'Some representative placeholder content for the first slide.', src:'img1.jpg' },
    ]
    return(
        <>
        <Row className="justify-content-center">
                    {allcards.map((card) => {
                        return (
                            <Col md={4} className="mb-4 d-flex justify-content-center">
                                <Card className="mt-4" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={card.src} />
                                    <Card.Body>
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>
                                            {card.discription}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row></>
    )
}
 export default MainSection