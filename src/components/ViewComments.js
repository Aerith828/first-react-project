import React, {useEffect, useState} from 'react';
import { formatDate } from '../utils/date';
import { ListGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';
import CreateComment from '../components/CreateComment';

const ViewComments = ({ article_id }) => {
    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/comments?id=' + article_id)
            .then((result) => {
                return result.json();
            })
            .then(({ status, comments }) => {
                if (status === "OK") {
                    setComments(comments.reverse());
                } else {
                    toast.error("Oups ... Nous avons eu une erreur !");
                }
            })
            .catch((error) => {
                toast.error("Oups ... Nous avons eu une erreur !");
                console.log(error);
            })
    }, [ article_id ])

    const handleCreate = (comment) => {
        const newComments = [ ...comments ];

        newComments.push(comment);

        setComments(newComments);
    }

    const renderedComments = comments.map((comment) => {
        const { id, content, created_at, authorFirstname, authorLastname } = comment;
        return (
            <ListGroup.Item key={id}>
                <p>
                    {content}
                </p>
                <small className="text-muted">
                    par {authorFirstname} {authorLastname}&nbsp;
                    le {formatDate(created_at)}
                </small>
            </ListGroup.Item>
        );
    });

    return(
        <ListGroup>
                {renderedComments}
                <ListGroup.Item>
                    <CreateComment 
                    article_id={article_id}
                    onCreate={handleCreate} 
                    />
                </ListGroup.Item>
        </ListGroup>
    );
};

export default ViewComments;