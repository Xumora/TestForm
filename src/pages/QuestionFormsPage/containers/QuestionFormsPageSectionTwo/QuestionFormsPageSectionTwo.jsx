import React from 'react'
import './QuestionFormsPageSectionTwo.scss'
import QuestionFormBlock from '../../../../components/QuestionFormsPageComponents/QuestionFormBlock/QuestionFormBlock'
import { useQuestionForm } from '../../../../context/context'

const QuestionFormsPageSectionTwo = () => {
    const [questionForms] = useQuestionForm();
    const [setquestionForms] = useQuestionForm(true);

    const addNewForm = () => {
        let mas = [...questionForms];
        mas.push(
            {
                type: "Bitta variantni tanlash",
                question: "",
                answers: ["", ""],
                must: false,
                trueAnswer: []
            }
        )
        setquestionForms(mas);
    }

    return (
        <div className="questionFormsPage-sectionTwo">
            <div className="questionFormsPage-sectionTwo-inner container">
                <div className="questionFormsPage-sectionTwo-inner-title"><h1>Topshiriq</h1></div>
                <div className="questionFormsPage-sectionTwo-inner-center">
                    {
                        questionForms.map((elem, i) => {
                            return <div className="questionForm-block-wrapper" key={i}>
                                <QuestionFormBlock elem={elem} num={i} />
                            </div>
                        })
                    }
                </div>
                <div className="questionFormsPage-sectionTwo-inner-bottom">
                    <button className="mainBtnTwo" onClick={addNewForm}>Topshiriqni qo’shish</button>
                </div>
            </div>
        </div>
    )
}

export default QuestionFormsPageSectionTwo
