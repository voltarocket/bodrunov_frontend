import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AiLogo from "../assets/icons/icon.svg";
import Globe from "../assets/icons/globe-outline.svg";
import ArrowDown from "../assets/icons/arrov_down.svg";
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isKnowledgeDropdownOpen, setIsKnowledgeDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('RUS');

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    setIsLanguageDropdownOpen(false);
    // Здесь можно добавить логику для смены языка в приложении
    // Например, использование i18n библиотеки или контекста
  };

  const languages = [
    { code: 'RUS', label: 'RUS' },
    { code: 'ENG', label: 'ENG' },
    { code: 'CHN', label: 'CHN' }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoText}>Архив С.Д. Бодрунова</Link>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <img src={AiLogo} alt="" />
            <Link to="/" className={styles.navLink}>ИИ-помошник</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about" className={styles.navLink}>О проекте</Link>
          </li>
          
          <li 
            className={`${styles.navItem} ${styles.dropdown}`} 
            onMouseEnter={() => setIsKnowledgeDropdownOpen(true)} 
            onMouseLeave={() => setIsKnowledgeDropdownOpen(false)}
          >
            <span className={styles.navLink}>
              База знаний
              <img 
                src={ArrowDown} 
                alt="arrow" 
                className={`${styles.dropdownIcon} ${isKnowledgeDropdownOpen ? styles.open : ""}`} 
              />
            </span>
            {isKnowledgeDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link 
                    to="/knowledge-base/articles" 
                    className={styles.dropdownLink}
                    onClick={() => setIsKnowledgeDropdownOpen(false)}
                  >
                    Статьи
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/knowledge-base/books" 
                    className={styles.dropdownLink}
                    onClick={() => setIsKnowledgeDropdownOpen(false)}
                  >
                    Книги
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/knowledge-base/videos" 
                    className={styles.dropdownLink}
                    onClick={() => setIsKnowledgeDropdownOpen(false)}
                  >
                    Видео
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        <div className={styles.authButtons}>
          <div 
            className={`${styles.dropdown} ${styles.languageDropdown}`}
            onMouseEnter={() => setIsLanguageDropdownOpen(true)}
            onMouseLeave={() => setIsLanguageDropdownOpen(false)}
          >
            <button className={styles.languageSwitch}>
              <img src={Globe} alt="Globe" />
              {currentLanguage}
            </button>
            {isLanguageDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                {languages.map((language) => (
                  <li key={language.code}>
                    <button 
                      className={`${styles.dropdownItem} ${
                        currentLanguage === language.code ? styles.activeLanguage : ''
                      }`}
                      onClick={() => handleLanguageChange(language.code)}
                    >
                      {language.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;