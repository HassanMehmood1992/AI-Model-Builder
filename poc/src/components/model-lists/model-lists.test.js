import React from 'react';
import ReactDOM from 'react-dom';
import ModelLists from './model-lists';

it('model lists renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModelLists />, div);
  ReactDOM.unmountComponentAtNode(div);
});
