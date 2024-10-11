import './App.css';
import Weather from './pages/weather';
import { WebSettingsProvider } from './utils/contexts/webSettingContext';

function App() {
  return (
    <div className="App">
      <WebSettingsProvider>
        <Weather />
      </WebSettingsProvider>
    </div>
  );
}

export default App;
