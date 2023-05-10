import { Alert, Button } from "react-bootstrap";
import { useState } from "react";

const AddedToCartMessageComponent = () => {
    const [show, setShow] = useState(true);
    return (
        <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
                <Button variant="success">Go Back</Button>
                <Button variant="danger">Go to Card</Button>
            </p>
        </Alert>
    );
};

export default AddedToCartMessageComponent;