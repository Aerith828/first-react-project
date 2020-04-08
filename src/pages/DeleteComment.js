import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const DeleteComment = () => {
    const [id, setId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Id : ", id);
    }

    const handleChange = (event) => {

        switch (event.target.name) {
            case "id":
                setId(event.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="comment.id">
                    <Form.Label>ID du commentaire</Form.Label>
                    <Form.Control
                        type="number"
                        name="id"
                        onChange={handleChange}
                        value={id}
                        placeholder="Supprimez le commentaire"
                    />
                </Form.Group>
                <Button type="submit">Supprime le commentaire</Button>
            </Form>
        </Container>
    );
}

export default DeleteComment;