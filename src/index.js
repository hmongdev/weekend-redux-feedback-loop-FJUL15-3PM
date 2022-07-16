import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//reducer
// const page = (state = [], action) => {
//     switch (action.type) {
//         case 'NEXT_PAGE':
//             return action.payload;
//         default:
//             return state;
//     }
// };

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
