
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { IoIosSearch } from "react-icons/io";

const Faq = () => {
    return (
        <Card>
            <Card.Body>
                <h5>F.A.Q</h5>
                <InputGroup className="mb-3">
                <Form.Control
                id='search-icon-input'
                    placeholder="Search patient&apos;s MRN, name or insurance number"
                    aria-label="Search"
                    aria-describedby="search-icon-input-icon"
                />
                <InputGroup.Text id="search-icon-input-icon"><IoIosSearch /></InputGroup.Text>
                </InputGroup>
            </Card.Body>
        </Card>
    )
}

export default Faq