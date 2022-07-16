import { useState } from 'react';

export default function Feeling() {
    const [feeling, setFeeling] = useState('');

    //handleFeeling
    const handleFeeling = (event) => {
        setFeeling(event.target.value);
    };

    return (
        <div>
            <div className="question">
                <form>
                    <h1>How are you feeling today?</h1>
                    {/* <h2>{feeling}</h2> */}
                    <label htmlFor="1">Confused</label>
                    <input
                        id="1"
                        type="radio"
                        value="1"
                        checked={feeling === '1'}
                        onChange={handleFeeling}
                    ></input>
                    <input
                        type="radio"
                        value="2"
                        checked={feeling === '2'}
                        onChange={handleFeeling}
                    ></input>
                    <input
                        type="radio"
                        value="3"
                        checked={feeling === '3'}
                        onChange={handleFeeling}
                    ></input>
                    <input
                        type="radio"
                        value="4"
                        checked={feeling === '4'}
                        onChange={handleFeeling}
                    ></input>
                    <input
                        id="5"
                        type="radio"
                        value="5"
                        checked={feeling === '5'}
                        onChange={handleFeeling}
                    ></input>
                    <label htmlFor="5">Confident</label>
                </form>
            </div>
        </div>
    );
}
