import React, { useState } from 'react'
import { useAnswerForm, useMust, useQuestionForm, useUserAnswer } from '../../../../context/context'
import './QuestionFormsPageSectionOne.scss'
import { Link } from 'react-router-dom'

const QuestionFormsPageSectionOne = () => {
    const [questionForms] = useQuestionForm();
    const [setanswerForms] = useAnswerForm(true);
    const [setmust] = useMust(true);
    const [setuserAnswers] = useUserAnswer(true);

    const [unsuccess, setunsuccess] = useState(false);
    const [success, setsuccess] = useState(false);

    const saveQuestionForms = () => {
        let full = true;
        questionForms.map((elem, i) => {
            if (elem.question.trim() === "") {
                full = false;
            }
            elem.answers?.map((v, i) => (v.trim() === "" ? full = false : full))
            return console.log();
        })
        if (full) {
            let mas = [];
            let mastwo = [];
            setanswerForms(questionForms);
            questionForms.map((e) => mas.push(false))
            setmust(mas);
            questionForms.map((e) => mastwo.push({ question: e.question, answer: [] }))
            setuserAnswers(mastwo);
            setunsuccess(false);
            setsuccess(true);
        }
        else {
            setunsuccess(true);
            setsuccess(false);
        }
    }

    return (
        <div className="questionFormsPage-sectionOne">
            <div className="questionFormsPage-sectionOne-inner container">
                <div className="questionFormsPage-sectionOne-inner-top">
                    <h1 className="title">English</h1>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <button className="mainBtn" onClick={saveQuestionForms}>Saqlash</button>
                        {(unsuccess && <small style={{ color: "red" }}>Maydonlarni to'liq to'ldiring!</small>)}
                        {(success && <small style={{ color: "green" }}>Muvaffaqqiyatli saqlandi!</small>)}
                        <Link to="/answers">to</Link>
                    </div>
                </div>
                <div className="questionFormsPage-sectionOne-inner-center">
                    <input type="text" placeholder="Sarlavhani shu yerga kiriting..." />
                </div>
                <div className="questionFormsPage-sectionOne-inner-bottom">
                    <input type="text" placeholder="Dars mazmunini qo’shing..." />
                </div>
            </div>
        </div>
    )
}

export default QuestionFormsPageSectionOne
