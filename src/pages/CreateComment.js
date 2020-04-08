import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateComment = () => {
    const [idArticle, setidArticle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Id Article : ", idArticle);
        console.log("content : ", content);
        console.log("author : ", author);
    }

    const handleChange = (event) => {
        console.log("target name : ", event.target.name);
        console.log("target value : ", event.target.value);

        switch (event.target.name) {
            case "idArticle":
                setidArticle(event.target.value);
                break;
            case "content":
                setContent(event.target.value);
                break;
            case "author":
                setAuthor(event.target.value);
                break;
            //no default
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="comment.idArticle">
                    <Form.Label>Id de l'article du commentaire</Form.Label>
                    <Form.Control
                        type="number"
                        name="idArticle"
                        onChange={handleChange}
                        value={idArticle}
                        placeholder="Id de l'article" />
                </Form.Group>
                <Form.Group controlId="comment.content">
                    <Form.Label>Contenu du commentaire</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="content"
                        onChange={handleChange}
                        value={content}
                    />
                </Form.Group>
                <Form.Group controlId="comment.author">
                    <Form.Label>ID de l'auteur</Form.Label>
                    <Form.Control
                        type="number"
                        name="author"
                        onChange={handleChange}
                        value={author}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Créer le commentaire</Button>
            </Form>
        </Container>
    );
}

export default CreateComment;