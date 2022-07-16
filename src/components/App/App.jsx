import React from 'react';
import axios from 'axios';
import './App.css';

//import Router, Route
import { HashRouter as Router, Route, useHistory } from 'react-router-dom';

//components
import Header from './Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';

//handleSubmit
const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/understanding');
};

export default function App() {
    //const
    const history = useHistory();

    return (
        <Router>
            <div className="App">
                <Header />
                <Route exact path="/feeling">
                    <Feeling />
                </Route>
                <Route exact path="/understanding">
                    <Understanding />
                </Route>
                <Route exact path="/support">
                    <Support />
                </Route>
                <Route exact path="/comments">
                    <Comments />
                </Route>
            </div>
        </Router>
    );
}
