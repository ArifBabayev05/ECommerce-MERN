import { Row, Container } from "react-bootstrap"
import CategoryCardComponent from "../components/CategoryCardComponent"
import ProductCarouselComponent from "../components/ProductCarouselComponent"

const HomePage = () => {
    const categories = [
        'Tablets',
        'Books',
        'Cameras',
        'Monitors',
        'Games',
        'Software',
        'Printers',

    ]
    return (
        <>
            <ProductCarouselComponent />
            <Container>
                <Row xs={1} md={2} className="g-4 mt-5">
                    {
                        categories.map((category,idx) => <CategoryCardComponent category={category} idx={idx}/>)
                    }
                </Row>
            </Container>
        </>
    )
}

export default HomePage