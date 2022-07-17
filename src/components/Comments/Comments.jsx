import { useState } from 'react';
import { useHistory } from 'react-router-dom';

//mui arrow
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useDispatch } from 'react-redux';

export default function Comments() {
    //state
    const [comment, setComments] = useState('');

    //const history
    const history = useHistory();
    const dispatch = useDispatch();

    //action
    const handleNext = (event) => {
        event.preventDefault();
        history.push('/review');
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment,
        });
    };

    //handleComment
    const handleComment = (event) => {
        setComments(event.target.value);
    };

    return (
        <div>
            <div className="comment-form">
                <form>
                    <h1>Any comments you want to leave?</h1>
                    <h4>(This is optional)</h4>
                    <textarea
                        id="comment"
                        type="text"
                        onChange={handleComment}
                    ></textarea>
                </form>
                <button onClick={handleNext}>
                    <DoneAllIcon className="nextButton" />
                </button>
                <h4>4 of 4</h4>
            </div>
        </div>
    );
}
