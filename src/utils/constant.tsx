export enum LANGUAGES { 
    ENGLISH = 'en',
    VIETNAMESE = 'vi'
};

export type I18nType = {
    [key: string]: any;
};

export const ApiBaseUrl = process.env.REACT_APP_API_BASE_URL || '';
export const ApiKey = process.env.REACT_APP_WEATHER_API_KEY || '';
export const IconUrl = process.env.REACT_APP_ICON_URL || '';
