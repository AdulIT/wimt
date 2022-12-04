import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Context from './components/UserContext';
import Geolocation from './components/styled/Geolocation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <App />
      {/* добавил проверить геолокацию */}
      <Geolocation />
    </Context>
  </React.StrictMode>
);


