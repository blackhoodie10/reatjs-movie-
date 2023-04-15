import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './redux/store'
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './sass/index.scss';

import Layout from './component/Layout';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Layout />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
