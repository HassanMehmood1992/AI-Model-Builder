import React from 'react';
import ReactDOM from 'react-dom';
import Validation from './validation';

it('Validation renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Validation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
