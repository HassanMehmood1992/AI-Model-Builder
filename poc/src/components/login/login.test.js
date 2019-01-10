import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';

it('login renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});
