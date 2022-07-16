import React from 'react';
import './App.css';

//import Router, Route
import { HashRouter as Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

//mui arrow
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//components
import Header from './Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import NewFeedback from '../NewFeedback/NewFeedback';

//handleNext
const handleNext = (event) => {
    event.preventDefault();
    history.push('/2');
};

export default function App() {
    //const history
    const history = useHistory();
    console.log(history);

    return (
        <Router>
            <div className="App">
                <Header />
                <Route path="/" exact component={Feeling} />
                <Route path="/2" exact component={Understanding} />
                <Route path="/3" exact component={Support} />
                <Route path="/4" exact component={Comments} />
                <Route path="/5" exact component={NewFeedback} />
            </div>
            <div className="nextButtonDiv">
                <button onClick={handleNext}>
                    <ArrowForwardIosIcon className="nextButton" />
                </button>
            </div>
        </Router>
    );
}
