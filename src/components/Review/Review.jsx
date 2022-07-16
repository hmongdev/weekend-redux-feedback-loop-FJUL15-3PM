//import css
import '../Review/Review.css';

export default function Review() {
    const resetSurvey = () => {
        console.log(`Submitted!`);
    };

    return (
        <div>
            <h1>Thank You!</h1>
            <button className="blueBtn" onClick={resetSurvey}>
                Leave New Feedback
            </button>
        </div>
    );
}
