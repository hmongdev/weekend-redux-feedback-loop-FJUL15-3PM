//import css
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../Review/Review.css';

export default function Review() {
    //const
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
    const resetSurvey = () => {
        history.push('/');
    };

    return (
        <div>
            <h1>Thank You!</h1>
            <h2>Here's your submission:</h2>
            <div className="formResults">
                <h3>Feeling: {feeling.feeling}</h3>
                <h3>Understanding: {understanding.understanding}</h3>
                <h3>Support: {support.support}</h3>
                <h3>Comment: {comment.comment}</h3>
            </div>
            <button className="blueBtn" onClick={resetSurvey}>
                Leave New Feedback
            </button>
        </div>
    );
}
