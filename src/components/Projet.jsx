import React, { useEffect, useState } from 'react';
import projetsData from '../data/projets.json';

const Projet = () => {
    const [projets, setProjets] = useState([]);

    useEffect(() => {
        setProjets(projetsData);
    }, []);

    return (
        <div className='projet'>
            <h1>Mon portfolio</h1>
            {projets.map((projet) => (
                <a href={projet.lien} target="_blank" rel="noopener noreferrer" key={projet.nom}>
                    <div className='block'>
                        <img src={projet.image} alt={projet.nom} />
                        <div>
                            <h3>{projet.nom}</h3>
                            <p>{projet.description}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Projet;
