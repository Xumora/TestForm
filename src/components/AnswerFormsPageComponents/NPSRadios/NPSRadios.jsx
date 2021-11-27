import React from 'react'
import './NPSRadios.scss'
import { useUserAnswer } from '../../../context/context'

const NPSRadios = ({ num }) => {
    const radioBtn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [userAnswers] = useUserAnswer();
    const [setuserAnswers] = useUserAnswer(true);
    let mas = [...userAnswers];
    const setAnswer = (event) => {
        mas[num].answer = event.target.value;
        setuserAnswers(mas);
    }

    return (
        <div className="radio">
            {
                radioBtn.map((elem, i) => {
                    return <div className="radio-box" key={elem}>
                        <input id={`radio${elem}`} type="radio" name="radio" value={elem} onChange={(event) => setAnswer(event)} />
                        <label htmlFor={`radio${elem}`}>{elem}</label>
                    </div>
                })
            }
        </div>
    )
}

export default NPSRadios
