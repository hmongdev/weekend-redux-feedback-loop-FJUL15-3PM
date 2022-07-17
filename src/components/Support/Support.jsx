//hooks
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//mui arrow
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Feeling() {
    //state
    const [support, setSupport] = useState(0);

    //const
    const history = useHistory();
    const dispatch = useDispatch();

    //action
    const handleNext = (event) => {
        event.preventDefault();
        if (!support) {
            alert(`You must select a rating!`);
        } else {
            history.push('/4');
            dispatch({
                type: 'ADD_SUPPORT',
                payload: support,
            });
        }
    };

    //handleSupport
    const handleSupport = (event) => {
        setSupport(Number(event.target.value));
    };

    return (
        <div>
            <div className="support-form">
                <form>
                    <h1>How well did you feel supported today?</h1>
                    <h1>{support}</h1>
                    <label htmlFor="notSupported">Not Supported</label>
                    <input
                        id="notSupported"
                        type="radio"
                        value="1"
                        checked={support === 1}
                        onChange={handleSupport}
                    ></input>
                    <input
                        type="radio"
                        value="2"
                        checked={support === 2}
                        onChange={handleSupport}
                    ></input>
                    <input
                        type="radio"
                        value="3"
                        checked={support === 3}
                        onChange={handleSupport}
                    ></input>
                    <input
                        type="radio"
                        value="4"
                        checked={support === 4}
                        onChange={handleSupport}
                    ></input>
                    <input
                        id="verySupported"
                        type="radio"
                        value="5"
                        checked={support === 5}
                        onChange={handleSupport}
                    ></input>
                    <label htmlFor="verySupported">Very Supported</label>
                </form>
                <button onClick={handleNext}>
                    <ArrowForwardIosIcon className="nextButton" />
                </button>
                <h4>3 of 4</h4>
            </div>
        </div>
    );
}
