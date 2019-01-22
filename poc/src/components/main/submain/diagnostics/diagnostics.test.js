import React from 'react';
import ReactDOM from 'react-dom';
import Diagnostics from './diagnostics';

it('diagnostics renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Diagnostics />, div);
  ReactDOM.unmountComponentAtNode(div);
});
