import React from 'react'
import './Answers.scss'
import { Check } from '../../../assets/Icons/Icons'
import { useUserAnswer } from '../../../context/context'

const Answers = ({ elem, num, type }) => {
    const [userAnswers] = useUserAnswer();
    const [setuserAnswers] = useUserAnswer(true);
    let mas = [...userAnswers]
    const setAnswer = (event) => {
        if (event.target.type === "radio") {
            mas[num].answer = [event.target.value];
        } else {
            if (event.target.checked) {
                mas[num].answer.push(event.target.value);
            } else {
                let k;
                mas[num].answer.map((v, i) => (v === event.target.value ? k = i : ''))
                mas[num].answer.splice(k, 1);
            }
        }
        setuserAnswers(mas);
    }

    return (
        <div className="answers" style={{ display: `${type === "Qisqa javob" ? "flex" : ""}` }}>
            {
                elem.map((v, i) => {
                    if (type === "Bitta variantni tanlash" || type === "Qisqa javob") {
                        return <div className="answers-radio" key={i}>
                            <input id={(type === "Qisqa javob" && "shortAnswerRadio" + i) || "answerRadio" + i} type="radio" name={(type === "Qisqa javob" && "shortAnswerRadio") || "answerRadio"} value={v} onChange={(event) => setAnswer(event)} />
                            <label htmlFor={(type === "Qisqa javob" && "shortAnswerRadio" + i) || "answerRadio" + i}>{v}</label>
                        </div>
                    } else if (type === "Bir nechta variantni tanlash") {
                        return <div className="answers-checkbox" key={i}>
                            {<input id={`answerCheckbox${i}`} type="checkbox" value={v} onChange={(event) => setAnswer(event)} />}
                            <label htmlFor={`answerCheckbox${i}`}><span><Check /></span> {v}</label>
                        </div>
                    }
                    return console.log();
                })
            }
        </div>
    )
}

export default Answers
