import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav';
import Home from './components/Home'


ReactDOM.render(
  <Nav />,
  document.getElementById('nav')
);
ReactDOM.render(
  <Home />,
  document.getElementById('content')
);

