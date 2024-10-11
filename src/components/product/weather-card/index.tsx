import { IconUrl } from "../../../utils/constant";
import WarnningBanner from "../../generic/warning-banner";
import styles from "./index.module.css";
import i18n from "./i18n";
import useLanguage from "../../../utils/hooks/useLanguage";

interface WeatherCardProps {
    data: any;
    temperature: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data, temperature }) => {
    const language = useLanguage();

    if (!data) {
        return null;
    }

    const isDataValid = data && data.main.temp <= temperature;
    return isDataValid ? (
        <div className={styles["card"]}>
            <div className={styles["card-title"]}>
                <div>
                    <p className={styles["city"]}>{data.name}, {data.sys.country}</p>
                    <p className={styles["weather-description"]}>{data.weather[0].description}</p>
                </div>
                <img
                    alt="weather"
                    className={styles["weather-icon"]}
                    src={`${IconUrl}${data.weather[0].icon}.png`}
                />
            </div>
            <div className={styles["details"]}>
                <p className={styles["temperature"]}>{Math.round(data.main.temp)}°C</p>
                <div>
                    <div className={styles["weather-details"]}>
                        <p className={styles["parameter-label"]}>{i18n[language].wind}</p>
                        <p className={styles["parameter-label"]}>{i18n[language].humidity}</p>
                        <p className={styles["parameter-label"]}>{i18n[language].pressure}</p>

                    </div>
                    <div className={styles["weather-details"]}>
                        <p className={styles["parameter-value"]}>{data.wind.speed} {i18n[language].windUnit}</p>
                        <p className={styles["parameter-value"]}>{data.main.humidity}%</p>
                        <p className={styles["parameter-value"]}>{data.main.pressure} hPa</p>
                    </div>
                </div>
            </div>
        </div>
    ) : <WarnningBanner message={i18n[language].notFoundWarn} />;
};
export default WeatherCard;