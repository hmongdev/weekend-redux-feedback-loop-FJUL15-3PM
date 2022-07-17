import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//! IMPORTS
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//! FEELING
const feeling = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            return action.payload; //give me back the data req.body
        default:
            return state;
    }
};
//! UNDERSTANDING
const understanding = (state = [], action) => {
    switch (action.type) {
        case 'ADD_UNDERSTANDING':
            return action.payload;
        default:
            return state;
    }
};
//! SUPPORT
const support = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SUPPORT':
            return action.payload;
        default:
            return state;
    }
};

//! COMMENT
const comment = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return action.payload;
        default:
            return state;
    }
};

//! STORE
const store = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comment,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
