import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const DeleteArticle= () => {
    const [ id, setId ] = useState(""); // let id

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case "id":
                setId(event.target.value);
                break;
            //no default
        }
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="article.id">
                    <Form.Label>Id de l'article à supprimer</Form.Label>
                    <Form.Control
                        type="number"
                        name="id"
                        onChange={handleChange}
                        value={id}
                    />
                </Form.Group>
                <Button type="submit">Supprimer l'article</Button>
            </Form>
        </Container>
    );
}


export default DeleteArticle;