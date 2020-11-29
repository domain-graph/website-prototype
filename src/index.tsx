import './index.less';

import React from 'react';
import { render } from 'react-dom';
import { App } from './app';

console.log('hello from react');

render(<App />, document.getElementById('app-root'));

// Hot Module Replacement API
if (module['hot']) {
  module['hot'].accept();
}
