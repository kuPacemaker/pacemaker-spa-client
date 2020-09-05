import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Root from './client/root';
import { register } from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
register();
