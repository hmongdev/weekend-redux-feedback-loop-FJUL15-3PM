//hooks
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//mui arrow
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Feeling() {
    //state
    const [feeling, setFeeling] = useState(0);

    //const
    const history = useHistory();
    const dispatch = useDispatch();

    //action
    const handleNext = (event) => {
        event.preventDefault();
        if (!feeling) {
            alert(`You must select a rating!`);
        } else {
            history.push('/2');
            dispatch({
                type: 'ADD_FEELING',
                payload: feeling,
            });
        }
    };

    //handleFeeling
    const handleFeeling = (event) => {
        setFeeling(Number(event.target.value));
    };

    return (
        <div>
            <div className="feeling-form">
                <form>
                    <h1>How are you feeling today?</h1>
                    <h1>{feeling}</h1>
                    <label htmlFor="confused">Confused</label>
                    <input
                        id="confused"
                        type="radio"
                        value="1"
                        checked={feeling === '1'}
                        onChange={handleFeeling}
                    ></input>
                    <input
                        type="radio"
                        value="2"
                        checked={feeling === '2'}
                        onChange={handleFeeling}
                    ></input>
                    <input
                        type="radio"
                        value="3"
                        checked={feeling === '3'}
                        onChange={handleFeeling}
                    ></input>
                    <input
                        type="radio"
                        value="4"
                        checked={feeling === '4'}
                        onChange={handleFeeling}
                    ></input>
                    <input
                        id="confident"
                        type="radio"
                        value="5"
                        checked={feeling === '5'}
                        onChange={handleFeeling}
                    ></input>
                    <label htmlFor="confident">Confident</label>
                </form>
                <button onClick={handleNext}>
                    <ArrowForwardIosIcon className="nextButton" />
                </button>
            </div>
        </div>
    );
}
