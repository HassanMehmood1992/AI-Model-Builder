import React from 'react';
import ReactDOM from 'react-dom';
import ModelStacking from './modek-stacking';

it('ModelStacking renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModelStacking />, div);
  ReactDOM.unmountComponentAtNode(div);
});
