import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import cover1 from '../../../../shared/assets/images/Frame 47 (8).png'
import cover2 from '../../../../shared/assets/images/Frame 48.png'
import cover3 from '../../../../shared/assets/images/Frame 62.png'
import cover4 from '../../../../shared/assets/images/Frame 50.png'
import styles from "./PopularPublicationsSection.module.css";

const publications = [
  {
    title: "Ноономика: траектории глобальной трансформации",
    author: "Монография С.Д. Бодрунова",
    image: cover1,
  },
  {
    title: "Учебник «Общая теория ноономики»",
    author: "С.Д. Бодрунов",
    image: cover2,
  },
  {
    title: "Традиции: Новое индустриальное общество. Предвари...",
    author: "Монография С.Д. Бодрунова",
    image: cover3,
  },
  {
    title: "Стратегическое трансформирование общества: знания...",
    author: "Монография В.И. Квинта, С.Д. Бодрунова",
    image: cover4,
  },
  {
    title: "Ноономика: траектории глобальной трансформации",
    author: "Монография С.Д. Бодрунова",
    image: cover1,
  },
  {
    title: "Учебник «Общая теория ноономики»",
    author: "С.Д. Бодрунов",
    image: cover2,
  },
  {
    title: "Традиции: Новое индустриальное общество. Предвари...",
    author: "Монография С.Д. Бодрунова",
    image: cover3,
  },
  {
    title: "Стратегическое трансформирование общества: знания...",
    author: "Монография В.И. Квинта, С.Д. Бодрунова",
    image: cover4,
  },
];

const PopularPublications: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Избранные материалы</h2>
      
      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            nextEl: `.${styles.nextButton}`,
            prevEl: `.${styles.prevButton}`
          }}
          className={styles.slider}
        >
          {publications.map((pub, idx) => (
            <SwiperSlide key={idx}>
              <div className={styles.card}>
                <img src={pub.image} alt={pub.title} className={styles.cover} />
                <h3 className={styles.cardTitle}>{pub.title}</h3>
                <p className={styles.author}>{pub.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className={styles.prevButton}></div>
        <div className={styles.nextButton}></div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>База знаний</button>
      </div>
    </section>
  );
};

export default PopularPublications;
