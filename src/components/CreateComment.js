import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateComment = ( { article_id, onCreate }) => {
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3001/api/comments/create', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                article_id,
                content,
                author,
            }),
        })
            .then((result) => {
                return result.json();
            })
            .then(({ status, extra, result }) => {
                if (status === "OK") {
                    onCreate({ 
                        id: result.commentId,
                        content,
                        article_id,
                        created_at: new Date(),
                        authorFirstname: "Emeline",
                        authorLastname: "GUERINET"
                    });

                    setContent("");
                    setAuthor("");
                } else {
                    toast.error(
                        <div>
                            Oups ... Nous avons eu une erreur ! <br />
                            {extra}
                        </div>
                    );
                }
            })
            .catch((error) => {
                toast.error("Oups ... Nous avons eu une erreur !");
                console.log(error);
            });
    };

    const handleChange = (event) => {
        switch (event.target.name) {
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
        <Form onSubmit={handleSubmit}>
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
    );
}

export default CreateComment;