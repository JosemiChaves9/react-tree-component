import React from 'react';
import ReactDOM from 'react-dom';
import { TreeComponent } from './components/TreeComponent';
import { testData } from './testMockData';

ReactDOM.render(
  <React.StrictMode>
    <TreeComponent data={testData} />
  </React.StrictMode>,
  document.getElementById('root')
);
