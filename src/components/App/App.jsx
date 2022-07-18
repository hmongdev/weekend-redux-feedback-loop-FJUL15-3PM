import React from 'react';
import './App.css';

//! HOOKS
import { HashRouter as Router, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

//components
import Header from './Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Feedback from '../Feedback/Feedback';
import Admin from '../Admin/Admin';

export default function App() {
    //const
    const dispatch = useDispatch();
    //GET
    const getFeedback = () => {
        axios
            .get('/feedback')
            .then((response) => {
                dispatch({
                    type: 'GET_FORM',
                    payload: response.data,
                });
            })
            .catch((err) => alert('GET ERR in app.jsx', err));
    };

    useEffect(() => {
        getFeedback();
    }, []);

    return (
        <div className="App">
            <Header />
            <Router>
                <Route path="/" exact component={Feeling} />
                <Route path="/2" exact component={Understanding} />
                <Route path="/3" exact component={Support} />
                <Route path="/4" exact component={Comments} />
                {/* passing functions requires its own component  */}
                <Route path="/review" exact>
                    <Review getFeedback={getFeedback} />
                </Route>
                <Route path="/5" exact component={Feedback} />
                <Route path="/admin" exact component={Admin} />
            </Router>
        </div>
    );
}
