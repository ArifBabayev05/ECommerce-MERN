import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"


const ProductDetailsPage = () => {
    const { id } = useParams()

    return (
        <Container>
            <Row className='mt-5'>
                <Col size={4}>
                    Images
                </Col>
                <Col size={8}>
                    <Row>
                        <Col size={8}>Product name,Price,Description, Rating</Col>
                        <Col size={4}>Product status, quantity</Col>
                    </Row>
                    <Row>
                        <Col className="mt-5">
                            <h5>Reviews</h5>
                        </Col>
                    </Row>
                    <hr />
                    send review form
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetailsPage