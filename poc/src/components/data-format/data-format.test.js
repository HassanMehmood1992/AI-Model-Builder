import React from 'react';
import ReactDOM from 'react-dom';
import DataFormat from './data-format';

it('DataFormat renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DataFormat />, div);
  ReactDOM.unmountComponentAtNode(div);
});
