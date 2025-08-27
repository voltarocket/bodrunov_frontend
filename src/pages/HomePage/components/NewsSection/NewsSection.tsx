import React from "react";
import cover1 from '../../../../shared/assets/images/Frame 47.png'
import cover2 from '../../../../shared/assets/images/Frame 47 (1).png'
import cover3 from '../../../../shared/assets/images/Frame 47 (2).png'
import cover4 from '../../../../shared/assets/images/Frame 47 (3).png'
import cover5 from '../../../../shared/assets/images/Frame 47 (4).png'
import cover6 from '../../../../shared/assets/images/Frame 47 (5).png'
import cover7 from '../../../../shared/assets/images/Frame 47 (6).png'
import cover8 from '../../../../shared/assets/images/Frame 47 (7).png'
import styles from "./NewsSection.module.css";

type NewsItem = {
  id: number;
  title: string;
  image: string;
  date: string;
};

const news: NewsItem[] = [
  {
    id: 1,
    title:
      "В издательстве «Sandro Teti Editore» (г. Рим) издана книга С.Д. Бодрунова и Р.Ю. Глазьева на английском языке",
    image: cover1,
    date: "20.08.25",
  },
  {
    id: 2,
    title: "Доска профессора С.Д. Бодрунова на форуме WAPE",
    image: cover2,
    date: "18.08.25",
  },
  {
    id: 3,
    title: "Издан курс лекций по ноономике в юбилейной серии МГУ имени М.В. Ломоносова",
    image: cover3,
    date: "15.07.25",
  },
  {
    id: 4,
    title: "Профессор С.Д. Бодрунов принял участие в заседании Совета WAPE",
    image: cover4,
    date: "16.08.25",
  },
  {
    id: 5,
    title: "ТАСС о презентации серии книг по теории ноономики директора ИНИР им. С.Ю. Витте С.Д. Бодрунова",
    image: cover5,
    date: "10.08.25",
  },
  {
    id: 6,
    title: "Создание Европейского центра ноономики",
    image: cover6,
    date: "5.06.25",
  },
  {
    id: 7,
    title: "Итоги молодежного конкурса по теории ноономики",
    image: cover7,
    date: "20.08.25",
  },
  {
    id: 8,
    title: "В Риме состоялась презентация серии книг по теории ноономики С.Д. Бодрунова",
    image: cover8,
    date: "20.08.25",
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Анонсы и новости</h2>

      <div className={styles.grid}>
        {news.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <p className={styles.cardTitle}>{item.title}</p>
            <span className={styles.date}>{item.date}</span>
          </div>
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.button}>Все новости</button>
      </div>
    </section>
  );
};

export default NewsSection;
