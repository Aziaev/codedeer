import React from 'react';
import ReactDOM from 'react-dom';
import Index from './modules/Index';

ReactDOM.render(
  <Index />, document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./modules/Index', () => {
    ReactDOM.render(
      <Index />,
      document.getElementById('root'),
    );
  });
}