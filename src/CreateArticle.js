import React, { useState } from 'react';

const CreateArticle = () => {
    const [ title, setTitle ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("titre : ", title);
    }

    const handleChange = (event) => {
        console.log("target name : ", event.target.name);
        console.log("target value : ", event.target.value);

        setTitle(event.target.value.substring(0,10));
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
                placeholder="contenu du l'article"
                >
            </textarea>
            <input
                type="number"
                name="author"
                placeholder="id de l'auteur"
            />
            <button type="submit">Créer l'article</button>
        </form>
    )
};

export default CreateArticle;