import React from 'react';
import "../ressource/style/competence.css"
const Competence = () => {
    const langue = [
        {
            index:1,
            nom : "Français",
            niveau : 40
        },
        {
            index : 2,
            nom : "Anglais",
            niveau : 20
        }
    ];
    const language =[
        {
            index: 1,
            nom : "HTML5",
            niveau : 50
        },
        {
            index: 2,
            nom : "CSS",
            niveau : 50
        },
        {
            index: 3,
            nom : "JavaScript",
            niveau : 40
        },
        {
            index: 4,
            nom : "PHP",
            niveau : 40
        }
    ];

    const framework = [
        
        {
            index: 1,
            nom : "React",
            niveau : 40
        },
        {
            index: 2,
            nom : "Node js",
            niveau : 40
        },
        {
            index: 3,
            nom : "Laravel",
            niveau : 30
        }
        
    ];

    
    return (
        <div>
            <div className='competence'>
                <section className='competenceItem'>
                    <h3>Langue</h3>
                    {langue.map((langue)=>(
                        <div className='item' key={langue.index}>
                            <h6>{langue.nom}</h6>
                            <span className='spans' style={{ width: `${langue.niveau}%` }}></span>
                            <span className='before'></span>
                            
                        </div>
                        
                    ))}
                </section>
                <section className='competenceItem'>
                    <h3>language</h3>
                    {language.map((language)=>(
                        <div className='item' key={language.index}>
                            <h6>{language.nom}</h6>
                            <span className='spans' style={{ width: `${language.niveau}%` }}></span>
                            <span className='before'></span>
                        </div>
                        
                    ))}
                </section>
                <section className='competenceItem'>
                    <h3>framework</h3>
                    {framework.map((framework)=>(
                        <div className='item' key={framework.index}>
                            <h6>{framework.nom}</h6>
                            <span className='spans' style={{ width: `${framework.niveau}%`}}></span>
                            <span className='before'></span>
                        </div>
                        
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Competence;