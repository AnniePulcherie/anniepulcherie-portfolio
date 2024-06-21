import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
 import "../ressource/style/menu.css";
const Menu = () => {
    const listeMenu = [
        {
            id: "1",
            nom:"Profil",
            lien: "/"
        },
        {
            id: "2",
            nom:"About",
            lien: "/about"
        },
       
       
        {
            id: "3", 
            nom:"Contact",
            lien: "/contact"
        },
       
    ];
    return (
        <div>
            
            <Navbar className="navbar" expand="lg">
                <Container>
                    <Navbar.Brand className='logo'>Portfolio</Navbar.Brand>
                    <Navbar.Toggle className="btn-menu" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-auto'>
                        { listeMenu.map((liste)=>(
                            <NavLink to={liste.lien} className="nav-link lien" key={liste.id} >
                              {liste.nom}
                            </NavLink>
                        ))}
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div> 
      
    );
};

export default Menu;