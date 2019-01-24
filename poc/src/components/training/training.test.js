import React from 'react';
import ReactDOM from 'react-dom';
import Training from './training';

it('Training renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Training />, div);
  ReactDOM.unmountComponentAtNode(div);
});
