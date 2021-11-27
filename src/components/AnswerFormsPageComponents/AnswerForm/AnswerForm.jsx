import React from 'react'
import NPSRadios from '../NPSRadios/NPSRadios'
import './AnswerForm.scss'
import Answers from '../Answers/Answers'
import { useUserAnswer } from '../../../context/context'

const AnswerForm = ({ elem, num }) => {
    const [userAnswers] = useUserAnswer();
    const [setuserAnswers] = useUserAnswer(true);

    let mas = [...userAnswers];

    const setAnswer = (event) => {
        mas[num].answer = event.target.value;
        setuserAnswers(mas);
    }

    return (
        <div className="answer-form">
            {
                (elem.type === "NPS so'rovnoma" && <NPSRadios num={num} />) ||
                (elem.type === "Matn" && <textarea cols="30" rows="10" onChange={(event) => setAnswer(event)} />) ||
                (elem.type === "To'liq javob" && <input type="text" onChange={(event) => setAnswer(event)} />) ||
                (elem.type === "Bitta variantni tanlash" && <Answers elem={elem.answers} num={num} type={elem.type} />) ||
                (elem.type === "Bir nechta variantni tanlash" && <Answers elem={elem.answers} num={num} type={elem.type} />) ||
                (elem.type === "Qisqa javob" && <Answers elem={["Ha", "Yo'q"]} num={num} type={elem.type} />)
            }
        </div>
    )
}

export default AnswerForm
