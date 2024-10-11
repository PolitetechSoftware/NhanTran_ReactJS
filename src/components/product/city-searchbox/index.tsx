import React, { useState } from 'react';
import i18n from './i18n';
import './index.css';
import useLanguage from '../../../utils/hooks/useLanguage';
import { debounce } from '../../../utils/functions';

interface CitySearchBoxProps {
    onChange: (city: string) => void;
}

const CitySearchBox: React.FC<CitySearchBoxProps> = ({ onChange }) => {
    const language = useLanguage(); 

    const handleInputChange = debounce(
        (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }, 250, this);

    return (
        <div className="city-searchbox-container">
            <input 
                className="city-searchbox"
                type="text" 
                onChange={handleInputChange}
                placeholder={i18n[language].placeholderText}
            />
        </div>
    );
};

export default CitySearchBox;