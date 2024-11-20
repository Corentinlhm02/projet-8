import React from 'react';

const Langages = () => {
    return (
        <div className='gridLangage'>
            <h1>Langages</h1>
            <div className='frontend'>
                <h3>Front-End</h3>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                    <img src="/images/html.svg" alt="logo html" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                    <img src="/images/css.svg" alt="logo css" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                    <img src="/images/js.svg" alt="logo javascript" />
                </a>
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/React-icon.svg" alt="logo react" />
                </a>
                <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/sass.svg" alt="logo sass" />
                </a>
            </div>
            <div className='backend'>
                <h3>Back-End</h3>
                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/nodejs.svg" alt="logo nodejs" />
                </a>
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/mongodb.svg" alt="logo mongodb" />
                </a>
            </div>
            <div className='design'>
                <h3>Autres</h3>
                <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/figma.svg" alt="logo figma" />
                </a>
            </div>
        </div>
    );
};

export default Langages;

