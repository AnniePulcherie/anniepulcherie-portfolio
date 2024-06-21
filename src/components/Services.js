import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import '../ressource/style/services.css'
const Services = () => {
    const listeServices =[
        {
            id:1,
            nom:"Création des site web",
            sary:"sary",
            detail:"Nous concevons des sites web modernes et responsives qui reflètent parfaitement votre image de marque.",
        },
        {
            id:2,
            nom:"Création des applications web",
            sary:"sary",
            detail:"Des applications web personnalisées pour répondre à vos besoins spécifiques et offrir une expérience utilisateur optimale.",
        },
        {
            id:3,
            nom:"Developpement de logiciel",
            sary:"sary",
            detail:"Nous développons des logiciels sur mesure, adaptés à vos exigences, pour automatiser vos processus et améliorer votre efficacité."
        },
        {
            id:4,
            nom:"Formation dans le developement web",
            sary:"sary",
            detail:""
        },
        {
            id:1,
            nom:"Formation de langue",
            sary:"sary",
            detail:""
        },
    ]
    return (
        <div>
            <h1>Nos Services</h1>
            <div className='container service'>
            {listeServices.map((liste=>(
                <Card>
                <CardImg src={liste.sary} alt='sary' />
                    <Card.Body>
                        <Card.Title>{liste.nom}</Card.Title>
                        <Card.Text>
                            {liste.detail}
                        </Card.Text>
                    </Card.Body>
                </Card>
                )))}
                
            </div>
        </div>
    );
};

export default Services;
