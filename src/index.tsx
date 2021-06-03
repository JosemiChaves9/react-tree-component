import React from 'react';
import ReactDOM from 'react-dom';
import { TreeComponent } from './components/TreeComponent';
import data from './mockData.json';

ReactDOM.render(
  <React.StrictMode>
    <TreeComponent data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);
