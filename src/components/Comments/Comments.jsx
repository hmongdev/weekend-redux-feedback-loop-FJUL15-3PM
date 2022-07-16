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
        history.push('/review');
        dispatch({
            type: 'ADD_COMMENTS',
            payload: { comment: comment },
        });
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
                    <h4>(This is optional)</h4>
                    <textarea
                        id="comment"
                        type="text"
                        onChange={handleComments}
                    ></textarea>
                </form>
                <button onClick={handleNext}>
                    <DoneAllIcon className="nextButton" />
                </button>
            </div>
        </div>
    );
}
