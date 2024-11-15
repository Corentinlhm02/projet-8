import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Langages from '../components/Langages';
import Formation from '../components/Formation';
import Button from '../components/Button';



function About() {
  const panels = [
    { title: 'Fiabilité', content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
    { title: 'Respect', content: 'La bienveillance fait parties des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Service', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Sécurité', content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' }
  ];
  return (
    <div className="abaoutPage">
      <Header />
      <div className='about'>
        <Banner/>
        <section className="langage-section">
          <Langages/>
        </section>
        <Formation/>
        <Button/>
      </div>
      <Footer />
    </div>
  );
}

export default About;


