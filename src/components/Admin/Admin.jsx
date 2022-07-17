//hooks
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//css
import './Admin.css';

export default function Admin() {
    //const
    const formsList = useSelector((store) => store.formsList);
    const history = useHistory();

    //function
    const resetSurvey = () => {
        history.push('/');
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {formsList.map((form, i) => {
                        return (
                            <tr key={i}>
                                <td> {form.feeling}</td>
                                <td> {form.understanding}</td>
                                <td> {form.support}</td>
                                <td> {form.comments}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button className="blueBtn" onClick={resetSurvey}>
                Leave New Feedback
            </button>
        </>
    );
}
