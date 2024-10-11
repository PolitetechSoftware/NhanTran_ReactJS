// WebSettingsContext.tsx
import React, { createContext, useState, ReactNode } from 'react';
import { LANGUAGES } from '../constant';

// Define the shape of the context's value
interface WebSettingsContextType {
  language: string;
  setLanguage: (language: string) => void;
}

// Create the context with a default value of the correct type
const WebSettingsContext = createContext<WebSettingsContextType | undefined>(undefined);

// Define a provider component that will handle the state
interface WebSettingsProviderProps {
  children: ReactNode;
}

export const WebSettingsProvider: React.FC<WebSettingsProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>(LANGUAGES.ENGLISH);

  return (
    <WebSettingsContext.Provider value={{ language, setLanguage }}>
      {children}
    </WebSettingsContext.Provider>
  );
};

export default WebSettingsContext;
