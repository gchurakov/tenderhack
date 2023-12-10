import React from 'react';
import ReactDOM from 'react-dom/client';

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import App from '@/app/App';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>,
);
