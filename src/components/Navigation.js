import React from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Navigation = () => {
    const [ cookies, setCookie, removeCookie ] = useCookies();

    const handleLogout = () => {
        removeCookie("userToken");
        removeCookie("user");
    }

    const renderButton = () => {
        if (cookies.userToken) {
            return(
                <Nav.Item>
                    <Button onClick={handleLogout} >Se déconnecter</Button>
                </Nav.Item>
            )
        } else {
            return(
                <Nav.Item>
                    <Button as={Link} to="/signin">Se connecter</Button>
                </Nav.Item>
            )
        }
    }

    const renderCreateArticleLink = () => {
        if (cookies.userToken) {
            return (
                <Nav.Item>
                    <Nav.Link as={Link} to="/articles/create">
                        Créer un article
                    </Nav.Link>
                </Nav.Item>
            )
        }
    }

    return (
        <Nav>
            <Nav.Item>
                <Nav.Link as={Link} to="/">
                    Accueil
                </Nav.Link>
            </Nav.Item>
            {renderCreateArticleLink()}
            <Nav.Item>
                <Nav.Link as={Link} to="/articles/delete">
                    Supprimer un article
                </Nav.Link>
            </Nav.Item>
            {renderButton()}
        </Nav>
    );
}

export default Navigation;