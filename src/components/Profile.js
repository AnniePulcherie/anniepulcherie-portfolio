import React, { useEffect, useRef } from 'react';
import "../ressource/style/profile.css";
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import profil from '../image/profil.JPG';
import Experience from './Experience';
import 'boxicons/css/boxicons.min.css';
import AnniePulcherie from '../ressource/AnniePulcherie.pdf';
const Profile = () => {
  const el = useRef(null);
  
 
    const downloadPDF = () => {
        // const pdfUrl = '../ressource/cv.pdf'; 
        // Créer un élément d'ancrage invisible pour déclencher le téléchargement
        const link = document.createElement('a');
        link.href = AnniePulcherie;
        link.setAttribute('download', 'CV_AnniePulchérie.pdf'); 

        // Ajouter l'élément d'ancrage au corps du document
        document.body.appendChild(link);

        // Simuler un clic sur l'élément d'ancrage pour démarrer le téléchargement
        link.click();

        // Nettoyer : supprimer l'élément d'ancrage du corps du document une fois le téléchargement terminé
        document.body.removeChild(link);
    };
 

  useEffect(()=>{
    const typed = new Typed(el.current, {
      strings:[' Développeuse Frontend', 'Développeuse Backend', 'Enseignante'],
      typeSpeed:100,
      backSpeed:100,
      backDelay:1000,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  },[])
  return (
    <div>
    <div className="home">
      <div className='container profil-space'>
      <div className='home-content'>
        <img className='image-profil' src={profil} alt='profil' />
      </div>
      <div className="home-content">
          <h1> Je suis Annie Pulchérie </h1>
          <span className='span-texte' ref={el}/>
          <div className=' container class-btn'>
            <Link  to='#'onClick={downloadPDF}>Télécharger mon CV </Link>
            <Link to='/contact'>Me contacter</Link>
          </div>
      </div>
      </div>
      <div className='home-sci'>
        <Link to='https://www.facebook.com/anniepulcherie.roudan'><i class='bx bxl-facebook' ></i></Link>
        <Link to='https://twitter.com/RoudanAnnie'><i class='bx bxl-twitter' ></i></Link>
        <Link to='https://www.linkedin.com/in/annie-pulcherie-roudan/'><i class='bx bxl-linkedin' ></i></Link>
      </div>
      </div>
      <div>
        <h1>Projet réalisés</h1>
        <Experience />
      </div>
    </div>
  );
};

export default Profile;

