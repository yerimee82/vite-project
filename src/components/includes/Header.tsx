import { useTranslation } from "react-i18next";
import { Languages, languages } from "../..//assets/lang/i18n";
import AuthRouter from "../../routers/AuthRouter";

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang: Languages) => {
    localStorage.setItem("language", lang); 
    i18n.changeLanguage(lang);
  };

  return (
    <div id="header">
      <h1>Mysite</h1>
      <div id="languages">
        {/* 언어 바꾸기용 버튼 */}
        {languages.map((lang) => (
          <button 
          key={lang} 
          data-lang={lang}
          onClick={() => handleChangeLanguage(lang)}>
            {t(`language_${lang}`)}
          </button>
        ))}
      </div>
      <AuthRouter />
    </div>
  );
};

export default Header;
