import { ApiBaseUrl, ApiKey } from '../../utils/constant';
import { handleErrorExection } from '../../utils/functions';

export const fetchWeatherByCityName = async (city: string, language: string) => {
    const response = await fetch(`${ApiBaseUrl}?q=${city}&appid=${ApiKey}&lang=${language}&units=metric`);
    const data = await response.json();
    if (!response.ok) {
        handleErrorExection(data);
    }
    return data;
};