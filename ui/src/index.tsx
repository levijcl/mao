import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RelayEnvironmentProvider } from 'react-relay';
import App from './App';
import { RelayEnvironment } from './relay';


ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
