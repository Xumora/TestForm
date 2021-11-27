import React from 'react'
import AnswerForm from '../AnswerForm/AnswerForm';
import './AnswerFormBlock.scss'

const AnswerFormBlock = ({ elem, i, must }) => {
    return (
        <div className="answer-formBlock">
            <div className="answer-formBlock-left"><p>{i + 1}</p></div>
            <div className="answer-formBlock-right">
                <div className="answer-formBlock-right-must" style={{ display: `${(must && "block") || "none"}` }}>Bu maydonni to'ldiring</div>
                <p className="question">{elem.question}</p>
                <AnswerForm elem={elem} num={i} />
            </div>
        </div>
    )
}

export default AnswerFormBlock
