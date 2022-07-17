import { useHistory } from 'react-router-dom';
import '../Feedback/Feedback.css';

export default function Feedback() {
    //const
    const history = useHistory();

    const reviewForms = () => {
        //redirect to home page
        history.push('/admin');
    };

    return (
        <>
            <h2>Thank you for your feedback!</h2>
            <button className="blueBtn" onClick={reviewForms}>
                Admin - See Submissions
            </button>
        </>
    );
}
