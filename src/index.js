import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { searchRobots,requestRobots } from './reducers';
import 'tachyons';
//as it exports more than 1 result. i.e. doesn't export only 1 value by default.

const logger=createLogger();
const rootReducers=combineReducers({searchRobots,requestRobots});
const store=createStore(rootReducers,applyMiddleware(ThunkMiddleware,logger));
// this is in order. first ThunkMiddleware will run, and then logger.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//Card id={robots[1].id} name={robots[1].name} email={robots[1].email} 
//Card id={robots[2].id} name={robots[2].name} email={robots[2].email} 
//

reportWebVitals();
