import React from 'react';

const Langages = () => {
    return (
        <div className='gridLangage'>
            <h1>Langages</h1>
            <div className='frontend'>
                <h3>Front-End</h3>
                <img src="/images/html.svg" alt="logo html" />
                <img src="/images/css.svg" alt="logo css" />
                <img src="/images/js.svg" alt="logo javascript" />
                <img src="/images/React-icon.svg" alt="logo react" />
                <img src="/images/sass.svg" alt="logo sass" />
            </div>
            <div className='backend'>
                <h3>Back-End</h3>
                <img src="/images/nodejs.svg" alt="logo nodejs" />
                <img src="/images/mongodb.svg" alt="logo mongodb" />
            </div>
            <div className='design'>
                <h3>Autres</h3>
                <img src="/images/figma.svg" alt="logo figma" />
            </div>
        </div>
    );
};

export default Langages;
