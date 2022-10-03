import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const FooterContext = () => {
    const { theme } = useContext(ThemeContext);
    const { texts } = useContext(LanguageContext);

    return (
        <footer className={theme}>
            <h4>{texts.footerTitle}</h4>
            <p>{texts.footerContent1}</p>
            <p>{texts.footerContent2}</p>
        </footer>
    );
};

export default FooterContext;