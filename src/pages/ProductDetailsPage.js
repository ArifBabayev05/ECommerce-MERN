import { Col, Container, Image, ListGroup, Row, Form, Button, Alert } from "react-bootstrap"

import AddedToCartMessageComponent from "../components/AddedToCardMessageComponent"
import { Rating } from "react-simple-star-rating"
import ImageZoom from 'js-image-zoom'
import { useEffect } from "react"


const ProductDetailsPage = () => {
    //Image Zoom Options
    var options = {
        scale:2,
        offset: {vertical: 0, horizontal:10}
    };
    useEffect(()=>{
        new ImageZoom(document.getElementById("first"),options)
        new ImageZoom(document.getElementById("second"),options)
        new ImageZoom(document.getElementById("third"),options)
        new ImageZoom(document.getElementById("fourth"),options)
    })

    return (
        <Container>
            <AddedToCartMessageComponent />

            <Row className="mt-5">
                <Col style={{zIndex:1}} md={4}>
                    <div id ="first">
                        <Image crossOrigin="anonymous" fluid src="/images/games-category.png" />
                    </div> <br />

                    <div id="second">
                        <Image crossOrigin="anonymous" fluid src="/images/monitors-category.png" />
                    </div> <br />

                    <div id="third">
                        <Image crossOrigin="anonymous" fluid src="/images/tablets-category.png" />
                    </div> <br />

                    <div id="fourth">
                        <Image crossOrigin="anonymous" fluid src="/images/games-category.png" />
                    </div> <br />
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={8}>
                            <ListGroup variant="flush">
                                <ListGroup.Item><h1>Product Name</h1></ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating readonly size={20} initialValue={4} /> (4)
                                </ListGroup.Item>
                                <ListGroup.Item>Price <span className='fw-bold'>$200</span> </ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur acPorta ac consectetur ac Porta ac consectetur ac Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={4}>
                            <ListGroup>
                                <ListGroup.Item>Status: In Stock</ListGroup.Item>
                                <ListGroup.Item>Price <span className='fw-bold'>$200</span> </ListGroup.Item>
                                <ListGroup.Item>
                                    Quantity:
                                    <Form.Select size="lg" aria-label="Default select example">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </Form.Select>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant="danger">Add to cart</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-5">
                            <h5>REVIEWS</h5>
                            <ListGroup variant="flush">
                                {Array.from({ length: 8 }).map((item, index) => (
                                    <ListGroup.Item key={index}>
                                        Name of user <br />
                                        <Rating readonly size={20} initialValue={4} /> <br />
                                        20-09-2023 <br />
                                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                    <hr />
                    <Alert variant="danger">Login first to write a review</Alert>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>Write a review</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Select aria-label="Default select example">
                            <option>Your Rating</option>
                            <option value="5">5 (very good)</option>
                            <option value="4">4 (good)</option>
                            <option value="3">3 (avarage)</option>
                            <option value="2">2 (bad)</option>
                            <option value="1">1 (awful)</option>
                        </Form.Select>
                        <Button className='my-3' variant="primary">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetailsPage