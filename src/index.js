import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import 'resources/font/helvetica/style.css';
import './resources/font/nanum_gothic/style.css';

import Root from 'components/Root';
import { register } from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
register();
