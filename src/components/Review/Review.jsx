//hooks
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Review() {
    //! STORE
    const feeling = useSelector((store) => store.feeling);
    const understanding = useSelector((store) => store.understanding);
    const support = useSelector((store) => store.support);
    const comment = useSelector((store) => store.comment);

    //! CONST
    const history = useHistory();
    const newForm = {
        feeling: feeling,
        understanding: understanding,
        support: support,
        comments: comment,
    };

    //! ACTION
    const handleSubmit = () => {
        //When the submit button is clicked, save the submission in the database.
        //! 4. CREATE POST
        axios
            //post to the database
            .post('/feedback', newForm)
            .then((response) => {
                console.log(`SUCCESS:`, response);
            })
            .catch((err) => {
                console.log('Error in client POST:', err);
            });
        history.push('/5');
    };

    return (
        <div>
            <h1>Thank You!</h1>
            <h2>Review your submission:</h2>
            <div className="formResults">
                <h3>Feeling: {feeling}</h3>
                <h3>Understanding: {understanding}</h3>
                <h3>Support: {support}</h3>
                <h3>Comment: {comment}</h3>
            </div>
            <button className="blueBtn" onClick={handleSubmit}>
                Submit!
            </button>
        </div>
    );
}
