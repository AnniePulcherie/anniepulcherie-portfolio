import React from 'react';
import "../ressource/style/formation.css"
const Formation = () => {
    const formations = [
        { 
            index : 1,
            année : "2023",
            titre : "Master en génie informatique à l'Université de Toamasina",
            detail: "Intégration d'oauth2.0 avec la techonologie blockchain"
           
        },
        {
            index : 2,
            année : "2022",
            titre : "Diplôme d'étude de langue française à l'alliance française Tamatave",
            detail : "DELF B2" 
        },
        {
            index : 3,
            année : "2021",
            titre : "Formation developpeur fullstack avec le framework Node js et Reactjs",
            detail: ""
        },
       { 
        index : 4,
        année : "2019",
        titre : "licence en informatique Academique à l'Université de Toamasina",
        detail: "Analyse et conception d'une plateforme de gestion de file d'attente"
        
       },
       {
        index : 5,
        année : "2016",
        titre : "Baccaleaureat serie D",
        detail:""
       }
    ];
    return (
        <div>
        
            <div className='formation'>
            {formations.map((formation)=>(
                <div className='formationItem' key={formation.index}>
                    <div className='info'>
                        <h2>{formation.titre}</h2>
                        <p>{formation.detail}</p>
                    </div>
                   
                    <div className='annee'>
                        <span>{formation.année}</span>
                        
                    </div>
                </div>

            ))}
                <span className='barre'></span>
            </div>
            
        </div>
    );
};

export default Formation;