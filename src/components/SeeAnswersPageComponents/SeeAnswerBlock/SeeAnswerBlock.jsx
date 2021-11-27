import React from 'react'
import './SeeAnswerBlock.scss'
import { Check, Times } from '../../../assets/Icons/Icons'
import { useAnswerForm } from '../../../context/context'

const SeeAnswerBlock = ({ elem, num }) => {
    const [answerForms] = useAnswerForm();

    return (
        <div className="seeAnswer-block">
            <div className="seeAnswer-block-number"><p>{num + 1}</p></div>
            <div className="seeAnswer-block-main">
                <p className="question">Savol: {elem.question}</p>
                <div className="answer"><p>Javob: {(elem.answer.length !== 0 && elem.answer.toString()) || "Javob berilmagan"}</p> {answerForms[num].trueAnswer.length !== 0 && <div className="svg-box">{(answerForms[num].trueAnswer.sort().toString() === elem.answer.sort().toString() && <Check />) || <Times />}</div>}</div>
            </div>
        </div>
    )
}

export default SeeAnswerBlock
