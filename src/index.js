import React from 'react';
import './styles/global.css'
import ReactDOM from 'react-dom';

// import pages
import Register from './pages/register'
import Checkout from './pages/checkout'
import Petshop from './pages/petshop'


ReactDOM.render(
  <React.StrictMode>
    <Petshop />
  </React.StrictMode>,
  document.getElementById('root')
);