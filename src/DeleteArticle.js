import React, {useState} from 'react';

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
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                name="id"
                onChange={handleChange}
                value={id}
                placeholder="id de l'Article à supprimer"
            />
            <button type="submit">Supprimer l'article</button>
        </form>
    );
}


export default DeleteArticle;