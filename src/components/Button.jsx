import React from 'react';

const Button = () => {
    
    const cvUrl = '/public/CV.pdf';

    return (
        <div className='buttonCV'>
            <a href={cvUrl} target="_blank" rel="noopener noreferrer">
                <button>Télécharger mon CV</button>
            </a>
        </div>
    );
};



export default Button;