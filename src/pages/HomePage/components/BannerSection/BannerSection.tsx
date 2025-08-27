import React from "react";
import styles from "./BannerSection.module.css";
import banner from "../../../../shared/assets/images/Banner.png"; 

const BannerSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className={styles.content}>
          <h1 className={styles.title}>
            ЦИФРОВОЙ АРХИВ <br /> СЕРГЕЯ ДМИТРИЕВИЧА <br /> БОДРУНОВА
          </h1>
          <p className={styles.subtitle}>
            Наследие для будущего — собрание ключевых работ, взглядов и достижений
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
