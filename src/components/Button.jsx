import React from 'react';

const Button = () => {
    const cvUrl = '/CV.pdf';

    return (
        <div className='buttonCV'>
            <a href={cvUrl} download>
                <button>Télécharger mon CV</button>
            </a>
        </div>
    );
};

export default Button;

