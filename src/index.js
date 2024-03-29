
import React,{} from 'react';
import ReactDOM from 'react-dom';
import SpinnerHome from './containers/spinner_home'
import App from './App'
import {Provider} from 'react-redux'
import store from './redux/store'



ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
    <SpinnerHome/>
    <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

