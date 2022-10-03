import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const initialTheme = "light";
const initailLanguage = "es";
const initialAuth=null;
const translations = {
    es:{
        headerTitle: "Mi aplicación sin ContextAPI",
        headerSubtitle: "Cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar sesión",
        buttonLogout: "Cerrar sesión",
        mainWelcome: "Bienvenid@ invitad@ a la aplicación",
        mainHello: "Hola usuari@",
        mainContent: "Este es el contenido de la aplicación sin ContextAPI de Mario",
        footerTitle: "Mi pie de página",
        footerContent1: "Contacto: Marioo295",
        footerContent2: "Número: 677385218",
    },
    en:{
        headerTitle: "My application without ContextAPI",
        headerSubtitle: "Header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Logout",
        mainWelcome: "Welcome to the application",
        mainHello: "Hello user",
        mainContent: "This is the context of the application without ContextAPI of Mario",
        footerTitle: "My footer",
        footerContent1: "Contact: Marioo295",
        footerContent2: "Number: 677385218",
    },
};

const MyPage = () => {

    const [theme, setTheme] = useState(initialTheme);
    const [language, setLanguage] = useState(initailLanguage);
    const [texts, setTexts] = useState(translations[language]);
    const [auth, setAuth] = useState(initialAuth);

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

    const handleAuth = (e) => {
        if (auth) {
            setAuth(null);
        } else {
            setAuth(true);
        }
    };

    return (
        <div className="my-page">
            <Header theme={theme} handleTheme={handleTheme} texts={texts} handleLanguage={handleLanguage} auth={auth} handleAuth={handleAuth}></Header>
            <Main theme={theme} texts={texts} auth={auth}></Main>
            <Footer theme={theme} texts={texts}></Footer>
        </div>
    );
};

export default MyPage