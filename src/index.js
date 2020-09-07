import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'resources/font/helvetica/style.css';
import './resources/font/nanum_gothic/style.css';

import Root from 'components/root';
import { register } from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
register();
