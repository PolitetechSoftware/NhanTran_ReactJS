
import { useState, useEffect } from 'react';
import useStates from '../../utils/hooks/useStates';
import useLanguage from '../../utils/hooks/useLanguage';
import { fetchWeatherByCityName } from './api';
import i18n from './i18n';

const useLogic = () => {
    const { states, setStates } = useStates({
        data: null,
        error: '',
        loading: false,
    });
    const [temperature, setTemperature] = useState(60);
    const [city, setCity] = useState('');
    const language = useLanguage();

    const handleSearch = async (city: string, language: string) => {
        try {
            setStates({ loading: true, error: '', warning: '', data: null });
            setCity(city);
            const data = await fetchWeatherByCityName(city, language);
            setStates({ data });
        } catch (error) {
            setStates({ error: (error as Error).message || 'System error' });
        } finally {
            setStates({ loading: false });
        }
    }

    useEffect(() => {
        if (city) {
            handleSearch(city, language);
        }
    }, [city, language]);

    return {
        states,
        handleSearch,
        setCity,
        temperature,
        setTemperature
    };
};

export default useLogic;