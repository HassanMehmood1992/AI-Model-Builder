import React from 'react';
import ReactDOM from 'react-dom';
import ModelSummary from './model-summary';

it('ModelSummary renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModelSummary />, div);
  ReactDOM.unmountComponentAtNode(div);
});
