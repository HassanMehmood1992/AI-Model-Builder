import React from 'react';
import ReactDOM from 'react-dom';
import ViewJob from './jobs_view';

it('ViewJob renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewJob />, div);
  ReactDOM.unmountComponentAtNode(div);
});
