import React from 'react';
import ReactDOM from 'react-dom';
import ModelSpecs from './model-specs';

it('Model Specs renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModelSpecs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
