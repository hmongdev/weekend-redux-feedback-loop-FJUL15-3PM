import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../Feedback/Feedback.css';

export default function Feedback() {
    //const
    const history = useHistory();
    const dispatch = useDispatch();

    //function
    const resetSurvey = () => {
        //RESET_APP
        dispatch({
            type: 'RESET',
        });
        //redirect to home page
        history.push('/');
    };

    return (
        <>
            <h2>Thank you for your feedback!</h2>
            <button className="blueBtn" onClick={resetSurvey}>
                Leave New Feedback
            </button>
        </>
    );
}
