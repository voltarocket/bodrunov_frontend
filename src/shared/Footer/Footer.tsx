import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}> {/* Добавленная обертка */}
        <div className={styles.topRow}>
          <div className={styles.column}>
            <div className={styles.logo}>Архив С.Д. Бодрунова</div>
          </div>

          <div className={styles.column}>
            <ul className={styles.navList}>
              <li><Link to="/knowledge-base" className={styles.link}>База знаний</Link></li>
              <li><Link to="/ai" className={styles.link}>ИИ-помощник</Link></li>
              <li><Link to="/about" className={styles.link}>О проекте</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <ul className={styles.navList}>
              <li><Link to="/knowledge-base/articles" className={styles.link}>Статьи</Link></li>
              <li><Link to="/knowledge-base/books" className={styles.link}>Монографии и книги</Link></li>
              <li><Link to="/knowledge-base/materials" className={styles.link}>Учебные материалы</Link></li>
              <li><Link to="/knowledge-base/lectures" className={styles.link}>Лекции и выступления</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <a href="mailto:info@bodrunov.com" className={styles.email}>
              info@bodrunov.com
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomWrapper}>
        <div className={styles.bottomContent}> {/* Добавленная обертка */}
          <div className={styles.bottomRow}>
            <span>© 2025</span>
            <Link to="/privacy" className={styles.bottomLink}>Политика конфиденциальности</Link>
            <span>
              Designed with love by{" "}
              <a href="https://statanly.com" target="_blank" rel="noreferrer" className={styles.bottomLink}>
                Statanly Technologies
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;