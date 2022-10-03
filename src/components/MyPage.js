import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const initialTheme = "light";
const initailLanguage = "es";
const translations = {
    es:{
        headerTitle: "Mi aplicación sin ContextAPI",
        headerSubtitle: "Cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar sesión",
        buttonLogout: "Cerrar sesión",
        mainWelcome: "Bienvenid@ invitad@",
        mainHello: "Hola usuari@",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pie de página",
    },
    en:{
        headerTitle: "My application without ContextAPI",
        headerSubtitle: "Header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Logout",
        mainWelcome: "Welcome",
        mainHello: "Hello user",
        mainContent: "My main content",
        footerTitle: "My footer",
    },
};

const MyPage = () => {

    const [theme, setTheme] = useState(initialTheme);
    const [language, setLanguage] = useState(initailLanguage);
    const [texts, setTexts] = useState(translations[language]);

    const handleTheme = (e) => {
        //console.log(e.target.value);
        if (e.target.value === "light") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    const handleLanguage = (e) => {
        //console.log(e.target.value);
        if (e.target.value === "es") {
            setLanguage("es");
            setTexts(translations.es);
        } else {
            setLanguage("en");
            setTexts(translations.en);
        }
    };

    return (
        <div className="my-page">
            <Header theme={theme} handleTheme={handleTheme} texts={texts} handleLanguage={handleLanguage}></Header>
            <Main theme={theme} texts={texts}></Main>
            <Footer theme={theme} texts={texts}></Footer>
        </div>
    );
};

export default MyPage