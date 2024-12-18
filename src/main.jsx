import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Email_Provider from './Email_Provider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Email_Provider>
    <App/>
    </Email_Provider>
  
  </StrictMode>
);
