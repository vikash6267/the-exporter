import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import reportWebVitals from './reportWebVitals';
import store from "./redux/store"
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <ToastContainer />

      </Provider>
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
