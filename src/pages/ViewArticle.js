import React, { useState, useEffect } from 'react';

import { formatDate } from '../utils/date';

import Container from 'react-bootstrap/Container';
import { toast } from 'react-toastify';

import ViewComments from '../components/ViewComments';

const ViewArticle = ( { match }) => {
    const { id } = match.params;
    console.log(id);

    const [ article, setArticle ] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/api/article?id=' + id)
            .then((result) => {
                return result.json();
            })
            .then(({ status, article }) => {
                if ( status === "OK") {
                    setArticle(article);
                } else {
                    toast.error("Oups .. Nous avons eu un problème!");
                }
            })
            .catch((error) => {
                toast.error("Oups ... Nous avons eu un problème !");
                console.log(error);
            })
    }, [ id ])

    return (
        <Container>
            <h1>{article.title}</h1>
            <p>
                {article.content}
            </p>
            <p>
                {formatDate(article.created_at)}<br/>
                par {article.authorFirstname} {article.authorLastname}
            </p>
            <ViewComments article_id={id} />
        </Container>
    );
};

export default ViewArticle;