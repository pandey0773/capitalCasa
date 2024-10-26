import { Button, Card, Row, Col, Figure } from 'react-bootstrap';

const MainSection = () => {
    const allcards = [
        { title: 'First Slide Label',Price: '1,400/-',Type: 'Double Bed',with: 'AC', discription: 'Some representative placeholder content for the first slide.', src: 'CapitalCasaLogo.png' },
        { title: 'First Slide Label',Price: '1,400/-',Type: 'Double Bed',with: 'AC', discription: 'Some representative placeholder content for the first slide.', src: 'img1.jpg' },
        { title: 'First Slide Label',Price: '1,400/-',Type: 'Double Bed',with: 'AC', discription: 'Some representative placeholder content for the first slide.', src: 'bed.jpg' },
        { title: 'First Slide Label',Price: '1,400/-',Type: 'Double Bed',with: 'AC', discription: 'Some representative placeholder content for the first slide.', src: 'bed2.jpg' },
        { title: 'First Slide Label',Price: '1,400/-',Type: 'Double Bed',with: 'AC', discription: 'Some representative placeholder content for the first slide.', src: 'bed2.jpg' },
        { title: 'First Slide Label',Price: '1,400/-',Type: 'Double Bed',with: 'AC', discription: 'Some representative placeholder content for the first slide.', src: 'img1.jpg' },
        { title: 'First Slide Label',Price: '1,400/-',Type: 'Double Bed',with: 'AC', discription: 'Some representative placeholder content for the first slide.', src: 'img1.jpg' },
        { title: 'First Slide Label',Price: '1,400/-',Type: 'Double Bed',with: 'AC', discription: 'Some representative placeholder content for the first slide.', src: 'img1.jpg' },
        { title: 'First Slide Label',Price: '1,400/-',Type: 'Double Bed',with: 'AC', discription: 'Some representative placeholder content for the first slide.', src: 'img1.jpg' },
    ]
    return (
        <>
            <Row className="justify-content-center text-center" style={{ width: '100%' }}>
                {allcards.map((card) => {
                    return (
                        <Col md={4}>
                            <Figure style={{ boxShadow: '2px 2px 5px 0px #c237', marginBottom: '3rem', width: '100%', marginLeft: '12px' }}>
                                <Figure.Image
                                    width={300}
                                    height={300}
                                    alt="300x300"
                                    src={card.src}
                                    style={{ height: '13rem', objectFit: 'cover', width: '100%' }}
                                />
                                <Figure.Caption>
                                    <Row>
                                        <Col style={{textAlign: 'left', paddingLeft: '2rem'}}>
                                            <div>{<><h6>Price: {card.Price}</h6></>}</div>
                                            <div>{<><h6>Type: {card.Type}</h6></>}</div>
                                            <div>{<><h6>With: {card.with}</h6></>}</div>
                                        </Col>
                                        <Col>{<>
                                            <img src='star-half-outline.svg' style={{height:'1.5rem'}}></img>
                                            <img src='star-half-outline.svg' style={{height:'1.5rem'}}></img>
                                            <img src='star-half-outline.svg' style={{height:'1.5rem'}}></img>
                                            <img src='star-half-outline.svg' style={{height:'1.5rem'}}></img>
                                            </>
                                            }</Col>
                                    </Row>

                                </Figure.Caption>
                            </Figure>
                        </Col>
                    )
                })}
            </Row></>
    )
}
export default MainSection