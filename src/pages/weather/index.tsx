import React from 'react';
import WeatherHeader from '../../components/product/weather-header';
import CityDropdown from '../../components/product/city-searchbox';
import TemperatureRange from '../../components/product/temperature-range';
import LoadingSpinner from '../../components/generic/loading-spinner';
import useLanguage from '../../utils/hooks/useLanguage';
import ErrorBanner from '../../components/generic/error-banner';
import WeatherCard from '../../components/product/weather-card';
import useLogic from './useLogic';
import styles from './index.module.css';
import i18n from './i18n';

const Weather: React.FC = () => {
    const language = useLanguage();
    const { states, setCity, temperature, setTemperature } = useLogic();
    const { data, loading, error } = states;
    return (
        <div className={styles["weather-page"]}>
            <WeatherHeader />
            <h1>{i18n[language].pageTitle}</h1>
            {/* Add your weather content here */}
            <div>
                <CityDropdown onChange={setCity} />
                <TemperatureRange onChange={setTemperature} temperature={temperature} />
            </div>
            <div className={styles["content-container"]}>
                {error && <ErrorBanner message={error} />}
                {loading ? <LoadingSpinner /> : <WeatherCard data={data} temperature={temperature}/>}
            </div>
        </div>
    );
};

export default Weather;