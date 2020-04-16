import React, {useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

import { ListGroup } from 'react-bootstrap';

import CreateComment from '../components/CreateComment';
import ViewComment from '../components/ViewComment';

const ViewComments = ({ article_id }) => {
    const [ comments, setComments ] = useState([]);

    const [ cookies, setCookie ] = useCookies();

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

    const handleDelete= (commentId) => {
        const newComments = comments.filter((comment) => {
            return comment.id !== commentId;
        })
        
        setComments(newComments);
    }

    const renderedComments = comments.map((comment) => {
        
        return (
            <ViewComment 
            key={comment.id}
            comment={comment} 
            onDelete={handleDelete}
            />
        );
    });

    const renderCreateComment = () => {
        if (cookies.userToken) {
            return(
                <ListGroup.Item>
                    <CreateComment 
                        article_id={article_id}
                        onCreate={handleCreate} 
                    />
                </ListGroup.Item>
            )
        }
    } 

    return(
        <ListGroup>
                {renderedComments}
                {renderCreateComment()}
        </ListGroup>
    );
};

export default ViewComments;