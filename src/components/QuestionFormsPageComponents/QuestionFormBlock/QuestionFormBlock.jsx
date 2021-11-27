import React from 'react'
import './QuestionFormBlock.scss'
import { Check } from '../../../assets/Icons/Icons'
import QuestionForm from '../QuestionForm/QuestionForm'
import QuestionChooseFormType from '../QuestionChooseFormType/QuestionChooseFormType'
import QuestionFormNavigationBtn from '../QuestionFormNavigationBtn/QuestionFormNavigationBtn'
import { useQuestionForm } from '../../../context/context'

const QuestionFormBlock = ({ elem, num }) => {
    const [questionForms] = useQuestionForm();
    const [setquestionForms] = useQuestionForm(true);

    const changeMust = (event) => {
        let mas = [...questionForms]
        mas[num].must = event.target.checked;
        setquestionForms(mas);
    }

    return (
        <div className="questionForm-block">
            <div className="questionForm-block-number">
                {num + 1}
            </div>
            <div className="questionForm-block-main">
                <div className="questionForm-block-main-top">
                    <div className="questionForm-block-main-top-left">
                        <QuestionChooseFormType elem={elem} num={num} />
                    </div>
                    <div className="questionForm-block-main-top-right">
                        <QuestionFormNavigationBtn i={num} />
                    </div>
                </div>
                <div className="questionForm-block-main-center">
                    <QuestionForm form={elem} num={num} />
                </div>
                <div className="questionForm-block-main-bottom">
                    <input type="checkbox" id={`must${num}`} className="must" onChange={(event) => changeMust(event)} />
                    <label htmlFor={`must${num}`}><span><Check /></span> Shart</label>
                </div>
            </div>
        </div>
    )
}

export default QuestionFormBlock
