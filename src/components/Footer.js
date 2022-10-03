import React from 'react'

const Footer = ( {theme, texts} ) => {
    return (
        <footer className={theme}>
            <h4>{texts.footerTitle}</h4>
            <p>{texts.footerContent1}</p>
            <p>{texts.footerContent2}</p>
        </footer>
    );
};

export default Footer