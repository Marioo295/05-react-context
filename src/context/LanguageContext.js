import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "es";
const translations = {
    es:{
        headerTitle: "Mi aplicación con ContextAPI",
        headerSubtitle: "Cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar sesión",
        buttonLogout: "Cerrar sesión",
        mainWelcome: "Bienvenid@ invitad@ a la aplicación",
        mainHello: "Hola usuari@",
        mainContent: "Este es el contenido de la aplicación con ContextAPI de Mario",
        footerTitle: "Mi pie de página",
        footerContent1: "Contacto: Marioo295",
        footerContent2: "Número: 677385218",
    },
    en:{
        headerTitle: "My application with ContextAPI",
        headerSubtitle: "Header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Logout",
        mainWelcome: "Welcome to the application",
        mainHello: "Hello user",
        mainContent: "This is the context of the application with ContextAPI of Mario",
        footerTitle: "My footer",
        footerContent1: "Contact: Marioo295",
        footerContent2: "Number: 677385218",
    },
};

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

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

    const data = { texts, handleLanguage };

    return (
        <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
    );
};

export { LanguageProvider };
export default LanguageContext;