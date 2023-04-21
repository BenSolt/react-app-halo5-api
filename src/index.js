import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import AppHalo5 from './AppHalo5';

import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppHalo5 />
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals(sendToVercelAnalytics);
