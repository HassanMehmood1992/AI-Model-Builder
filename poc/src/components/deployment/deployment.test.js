import React from 'react';
import ReactDOM from 'react-dom';
import Deployment from './deployment';

it('deployment renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Deployment />, div);
  ReactDOM.unmountComponentAtNode(div);
});
