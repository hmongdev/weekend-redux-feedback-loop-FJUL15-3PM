//hooks
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../Review/Review.css';
import axios from 'axios';

export default function Review({ getForm }) {
    //const / store
    const history = useHistory();
    const feeling = useSelector((store) => store.feeling);
    const understanding = useSelector((store) => store.understanding);
    const support = useSelector((store) => store.support);
    const comment = useSelector((store) => store.comment);

    console.log(`feeling`, feeling);
    console.log(`understanding`, understanding);
    console.log(`support`, support);
    console.log(`comment`, comment);

    //action
    const handleSubmit = () => {
        //When the submit button is clicked, save the submission in the database.
        //! 4. CREATE POST => 404 Error
        axios
            .post('/feedback', {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comment,
            })
            .then((response) => {
                getForm();
                dispatch({
                    type: 'POST_FORM',
                });
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
