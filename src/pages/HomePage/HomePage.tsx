import React from 'react';
import PublicationsSection from './components/PublicationSection/PublicationSection';
import PopularPublications from './components/PopularPublicationsSection/PopularPublicationsSection';
import AiAssistantSection from './components/AiAssistant/AiAssistantSection';
import BannerSection from './components/BannerSection/BannerSection';
import NewsSection from './components/NewsSection/NewsSection';
import styles from "./HomePage.module.css"

const HomePage: React.FC = () => {
    return (
        <div className={styles.main_content}>
            <BannerSection />
            <PublicationsSection />
            <AiAssistantSection />
            <PopularPublications />
            <NewsSection />
        </div>
    );
};

export default HomePage;