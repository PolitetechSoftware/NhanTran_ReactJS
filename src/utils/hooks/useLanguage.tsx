import React from 'react';
import WebSettingsContext from '../contexts/webSettingContext';
import { LANGUAGES } from '../constant';

const useLanguage = () => {
    const webSettings = React.useContext(WebSettingsContext);
    const language = webSettings?.language || LANGUAGES.ENGLISH;
    return language;
};
export default useLanguage;