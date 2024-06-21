import React, { useState } from 'react';
import Modal from 'react-modal';
import '../ressource/style/experiences.css';
import profil from '../image/profil.JPG';
import accueil from '../image/accueil.PNG';
import sectDirect from '../image/sectDirect.PNG';
import picking from '../image/picking.PNG';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root'); // Nécessaire pour l'accessibilité

const Experience = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        console.log(project);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setModalIsOpen(false);
    };

    const projet = [
        {
            id: 1,
            titre: 'ISDset',
            image: accueil,
            description: 'Une plateforme de gestion pour un institut supérieur.',
            Technologies: 'ReactJS, Node.js, MySQL',
            Fonctionnalités: 'Inscription en ligne, gestion des étudiants et des cours, dashboard admin et étudiant.',
            github: "https://github.com/AnniePulcherie/projet-isdset",
        },
        {
            id: 2,
            titre: "Picking List",
            image: picking,
            description: "Une application web permettant de vérifier des articles en scannant leur code-barres",
            Technologies: "PHP, Laravel, Javascript, MYSQL",
            Fonctionnalités: "Vérification d'articles par code-barres, Interface utilisateur pour la recherche et la vérification des articles, Gestion des articles et des inventaires",
            github: "https://github.com/AnniePulcherie/Picking_list/tree/master",
        },
        {
            id: 3,
            titre: "Gestion de File d'Attente avec Notifications Instantanées",
            image: sectDirect,
            description: "Une application web permettant de gérer les rendez-vous et la file d'attente des visiteurs en temps réel grâce à des notifications instantanées.",
            Technologies: "Nodejs, Express, Reactjs, MySQL, Socket.io, Json Web Token",
            Fonctionnalités: "Organisation et suivi des visiteurs en temps réel, Envoi de notifications pour informer les utilisateurs des mises à jour en temps réel, Utilisation de JWT pour gérer les sessions utilisateur de manière sécurisée",
            Défis : "Communication en temps réel : Mise en place de Socket.io pour une communication bidirectionnelle en temps réel; Gestion des sessions : Implémentation de JWT pour sécuriser et gérer les sessions utilisateur; Synchronisation des données : Assurer la cohérence et la synchronisation des données de la file d'attente entre le frontend et le backend.",
            github: "https://github.com/AnniePulcherie/filAttenteFrontEndReactJs/tree/master",
        },
    ];

    return (
        <div className='liste-style'>
            {projet && projet.map(pro => (
                <div key={pro.id} className='card'>
                    <div className='card-image'>
                        <img src={pro.image} alt='img2'/>
                        <div>
                            <p>{pro.titre}</p>
                        </div>
                        <p>{pro.description}</p>
                        <button onClick={() => openModal(pro)}>Afficher les détails</button>
                    </div>
                </div>
            ))}

            {selectedProject && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Détails du Projet"
                    className="Modal"
                    
                >
                     <div className="modal-content">
                        <img src={selectedProject.image} alt='sary' />
                        <div className="modal-text">
                            <h2>{selectedProject.titre}</h2>
                            <p><strong>Description :</strong> {selectedProject.description}</p>
                            <p><strong>Technologies :</strong> {selectedProject.Technologies}</p>
                            <p><strong>Fonctionnalités :</strong> {selectedProject.Fonctionnalités}</p>
                            {selectedProject.Défis && <p><strong>Défis :</strong> {selectedProject.Défis}</p>}
                        </div>
                    </div>
                    <div className="modal-actions">
                        <button onClick={closeModal}>Fermer</button>
                        <Link to={selectedProject.github} target="_blank">GitHub</Link>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Experience;
