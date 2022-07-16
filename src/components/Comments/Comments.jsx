import { useState } from 'react';
import { useHistory } from 'react-router-dom';

//mui arrow
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function Comments() {
    //state
    const [comment, setComments] = useState('');

    //const history
    const history = useHistory();

    //handleNext
    const handleNext = (event) => {
        event.preventDefault();
        history.push('/5');
        // dispatch({
        //     type: 'ADD_FEELING',
        //     payload: { feeling },
        // });
    };

    //handleComments
    const handleComments = (event) => {
        setComments(event.target.value);
    };
    //check rating
    console.log(`Comments rating is:`, comment);

    return (
        <div>
            <div className="comment-form">
                <form>
                    <h1>Any comments you want to leave?</h1>
                    <h1>{comment}</h1>
                    <input
                        id="comment"
                        type="text"
                        onChange={handleComments}
                    ></input>
                </form>
                <button onClick={handleNext}>
                    <DoneAllIcon className="nextButton" />
                </button>
            </div>
        </div>
    );
}
