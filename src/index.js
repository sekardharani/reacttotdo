import React from 'react';
import ReactDOM from 'react-dom';
/*
Bootstrap setup:
----------------

Install below packages and Import your index.js files
1. Bootstrap
2. JQuery
3. Popper.js

Command to Install : npm i boostrap jquery popper.js

import 'bootstrap/dist/css/bootstrap.css';
import "jquery/dist/jquery"
import "popper.js/dist/umd/popper"
import 'bootstrap/dist/js/bootstrap';

*/
import 'bootstrap/dist/css/bootstrap.css';
import "jquery/dist/jquery"
import "popper.js/dist/umd/popper"
import 'bootstrap/dist/js/bootstrap';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
