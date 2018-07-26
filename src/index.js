import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import './assets/reset.css';
import './assets/less/mixins.less'

import './mock/mockServer'
import Main from './containers/Main/main';
import store from './redux/store'

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
        <Route component={Main}/>
    </HashRouter>
  </Provider>
  ) , document.getElementById('root'));

