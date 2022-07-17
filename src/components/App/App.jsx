import React from 'react';
import './App.css';

//import Router, Route
import { HashRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//components
import Header from './Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

//! 3. CREATE GET
//! GET
// const getForm = () => {
//     axios
//         .get('/feedback')
//         .then((response) => {
//             dispatch({
//                 type: 'GET_FORM',
//                 payload: response.data,
//             });
//         })
//         .catch((err) => alert('GET ERR in app.jsx', err));
// };

export default function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Route path="/" exact component={Feeling} />
                <Route path="/2" exact component={Understanding} />
                <Route path="/3" exact component={Support} />
                <Route path="/4" exact component={Comments} />
                <Route
                    path="/review"
                    // getForm={getForm}
                    exact
                    component={Review}
                />
            </Router>
        </div>
    );
}
