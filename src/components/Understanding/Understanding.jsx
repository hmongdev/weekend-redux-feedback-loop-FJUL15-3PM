//hooks
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//mui arrow
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Feeling() {
    //state
    const [understanding, setUnderstanding] = useState(0);

    //const
    const history = useHistory();
    const dispatch = useDispatch();

    //action
    const handleNext = (event) => {
        event.preventDefault();
        if (!understanding) {
            alert(`You must select a rating!`);
        } else {
            history.push('/3');
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: understanding,
            });
        }
    };

    //handleUnderstanding
    const handleUnderstanding = (event) => {
        setUnderstanding(Number(event.target.value));
    };

    return (
        <div>
            <div className="understanding-form">
                <form>
                    <h1>How well did you understand the content today?</h1>
                    <h1>{understanding}</h1>
                    <label htmlFor="confused">Confused</label>
                    <input
                        id="confused"
                        type="radio"
                        value="1"
                        checked={understanding === 1}
                        onChange={handleUnderstanding}
                    ></input>
                    <input
                        type="radio"
                        value="2"
                        checked={understanding === 2}
                        onChange={handleUnderstanding}
                    ></input>
                    <input
                        type="radio"
                        value="3"
                        checked={understanding === 3}
                        onChange={handleUnderstanding}
                    ></input>
                    <input
                        type="radio"
                        value="4"
                        checked={understanding === 4}
                        onChange={handleUnderstanding}
                    ></input>
                    <input
                        id="confident"
                        type="radio"
                        value="5"
                        checked={understanding === 5}
                        onChange={handleUnderstanding}
                    ></input>
                    <label htmlFor="confident">Confident</label>
                </form>
                <button onClick={handleNext}>
                    <ArrowForwardIosIcon className="nextButton" />
                </button>
                <h4>2 of 4</h4>
            </div>
        </div>
    );
}
