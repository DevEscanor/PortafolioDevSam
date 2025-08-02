import { useState } from "react";
import { useTranslation, withTranslation } from "react-i18next";

const LanguageBTNs = (props) => {

  const { i18n } = useTranslation();

  const [activar, setActivar] = useState(i18n.language === "es");

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    if (language === "en") {
      setActivar(false);
    } else {
      setActivar(true);
    }
  }
  return (


    <li style={{ listStyle: "none" }} className="showDropdown" onClick={() => props.esMovil && props.cerrarMenuMovil()}>
      <button
        className={activar ? "navbar__btn__lang" : "navbar__btn__lang active__lang"}
        onClick={() => changeLanguage("en")}>
        ENG
      </button>

      <button
        className={activar ? "navbar__btn__lang active__lang" : "navbar__btn__lang"}
        onClick={() => changeLanguage("es")}>
        ESP
      </button>
    </li>
  );
};

export default withTranslation()(LanguageBTNs);
