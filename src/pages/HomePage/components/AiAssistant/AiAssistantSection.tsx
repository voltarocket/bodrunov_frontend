import React from "react";
import Arrow from "../../../../shared/assets//icons/arrow_forward.svg"
import styles from "./AiAssistantSection.module.css";

const AiAssistant: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Задайте вопрос <span className={styles.accent}>ИИ-ассистенту</span>
      </h2>
      <p className={styles.subtitle}>
        Ассистент, обученный на трудах академика Бодрунова, поможет вам понять ключевые идеи и термины и подскажет, с чего начать освоение темы
      </p>

      <div className={styles.inputWrapper}>
        <textarea
          className={styles.textarea}
          rows={4}
          placeholder="Задайте вопрос — чтобы найти статью, уточнить термин или разобраться в теме "
        />
        <button className={styles.button}>
          <img src={Arrow} alt="" />
        </button>
      </div>
    </section>
  );
};

export default AiAssistant;
