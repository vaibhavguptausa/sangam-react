
import React from 'react';
import ReactDOM from 'react-dom';
// import '@appbaseio/reactivesearch/dist/css/style.min.css';

import './index.css';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();