import React from "react";
import { Link } from "react-router-dom";
import styles from "./PublicationSection.module.css";

import fileIcon from "../../../../shared/assets/icons/library_books.svg";
import bookIcon from "../../../../shared/assets/icons/menu_book.svg";
import materialIcon from "../../../../shared/assets/icons/bookmarks.svg";
import micIcon from "../../../../shared/assets/icons/Group.svg";

const items = [
  { title: "Статьи", icon: fileIcon, link: "/knowledge-base/articles" },
  { title: "Монографии и книги", icon: bookIcon, link: "/knowledge-base/books" },
  { title: "Учебные материалы", icon: materialIcon, link: "/knowledge-base/materials" },
  { title: "Лекции и выступления", icon: micIcon, link: "/knowledge-base/lectures" },
];

const PublicationsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Полная коллекция трудов и публикаций</h2>

      <div className={styles.grid}>
        {items.map((item, idx) => (
          <Link key={idx} to={item.link} className={styles.card}>
            <div className={styles.icon}>
              <img src={item.icon} alt={item.title} className={styles.iconImg} />
            </div>
            <span className={styles.cardTitle}>{item.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PublicationsSection;
