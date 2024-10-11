import React, { useState } from 'react';
import styles from './index.module.css';
import i18n from './i18n';
import useLanguage from '../../../utils/hooks/useLanguage';

interface TemperatureRangeProps {
    temperature: number;
    onChange: (temperature: number) => void;
}

const TemperatureRange: React.FC<TemperatureRangeProps> = ({ onChange, temperature }) => {
    const language = useLanguage();

    const handleTemperatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTemperature = parseInt(event.target.value);
        onChange(newTemperature);
    };

    return (
        <div className={styles["temperature-container"]}>
            <label className={styles["temperature-label"]} htmlFor="temperatureRange">{i18n[language].label}: -40°C - {temperature}°C</label>
            <input
                type="range"
                className={styles["temperature-range"]}
                min={-20}
                max={60}
                value={temperature}
                onChange={handleTemperatureChange}
            />
        </div>
    );
};

export default TemperatureRange;