import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// import i18n
import 'translations';

import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback=''>
      <App />
    </Suspense>
  </React.StrictMode>,
);
