import React, { useCallback } from 'react';
import WebSettingsContext from '../../../utils/contexts/webSettingContext';
import { LANGUAGES } from '../../../utils/constant';
import styles from './index.module.css';
import i18n from './i18n';


const WeatherHeader: React.FC = () => {
    const webSettings = React.useContext(WebSettingsContext);
    const language = webSettings?.language || LANGUAGES.ENGLISH;
    const setLanguage = webSettings?.setLanguage || (() => {});

    const onLanguageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setLanguage(e.target.value);
    }, []);

    return (
        <div>
            <div className={styles["language-container"]}>
                <label>{i18n[language].label}: </label>
                <input 
                    type="radio"
                    name="language"
                    value={LANGUAGES.ENGLISH}
                    checked={language === LANGUAGES.ENGLISH}
                    onChange={onLanguageChange}
                /> English
                <input
                    type="radio"
                    name="language"
                    value={LANGUAGES.VIETNAMESE}
                    checked={language === LANGUAGES.VIETNAMESE}
                    onChange={onLanguageChange}
                /> Vietnamese
            </div>
            <div className={styles["clear"]}></div>
        </div>
        
    );
};

export default WeatherHeader;