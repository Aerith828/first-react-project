import React, { useState } from 'react';

const CreateArticle = () => {
    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");
    const [ author, setAuthor ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("titre : ", title);
        console.log("content : ", content);
        console.log("author : ", author);
    }

    const handleChange = (event) => {
        console.log("target name : ", event.target.name);
        console.log("target value : ", event.target.value);

        switch(event.target.name) {
            case "title":
                setTitle(event.target.value);
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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                onChange={handleChange}
                value={title}
                placeholder="titre de l'article"
            />
            <textarea
                name="content"
                onChange={handleChange}
                value={content}
                placeholder="contenu du l'article"
                >
            </textarea>
            <input
                type="number"
                name="author"
                onChange={handleChange}
                value={author}
                placeholder="id de l'auteur"
            />
            <button type="submit">Créer l'article</button>
        </form>
    )
};

export default CreateArticle;