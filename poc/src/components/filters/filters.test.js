import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './filters';

it('filters renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Filter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
