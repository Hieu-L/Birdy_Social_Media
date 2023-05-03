import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Test';
// import MainPage from './MainPage';
import reportWebVitals from './reportWebVitals';
// import MainPage from './MainPage';
// import Login from './Authentification/Login';
// import ProfileCard from './ProfileCard';
import Sidebar from './Sidebar';
import User from './User';
import MainPage from './MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
    {/* <App /> */}
    {/* <User /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();