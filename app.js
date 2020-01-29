import React from 'react';
import ReactDOM from 'react-dom';
import DiagramViewer from './components/DiagramViewer';
import './main.css';

ReactDOM.render(
  <DiagramViewer content="Hello World!"/>,
  document.getElementById('root')
);
