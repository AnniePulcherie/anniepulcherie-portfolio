import React from 'react';
import Competence from './Competence';
import Formation from './Formation';

const About = () => {
    return (
        <div>
            <main>
          
                    <section>
                        <h1>Formation</h1>
                        <Formation />
                    </section>
                    <section>
                        <h1>Compétence</h1>
                        <Competence />
                    </section>
                
            </main>
        </div>
    );
};

export default About;