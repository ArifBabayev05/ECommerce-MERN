import { Alert, Button, Col, Container, ListGroup, Row } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const CartPage = () => {
    return (
        <Container fluid>
            <Row className='mt-4'>
                <Col md={8}>
                    <h1>Shopping cart</h1>
                    {Array.from({ length: 3 }).map((item) => (
                        <>
                            CartItemComponent <br />
                        </>
                    ))}
                    <Alert variant="info">There is no product in cart</Alert>
                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h2>Subtotal (2 items)</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price <span className="fw-bold">20%</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <LinkContainer to="/user/order-details">
                                <Button type='button'>Proceed to checkout</Button>
                            </LinkContainer>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>)
}

export default CartPage