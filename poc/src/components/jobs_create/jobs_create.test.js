import React from 'react';
import ReactDOM from 'react-dom';
import CreateJob from './jobs_create';

it('CreateJob renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateJob />, div);
  ReactDOM.unmountComponentAtNode(div);
});
