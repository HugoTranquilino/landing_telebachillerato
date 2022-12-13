import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {App} from './App/App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
