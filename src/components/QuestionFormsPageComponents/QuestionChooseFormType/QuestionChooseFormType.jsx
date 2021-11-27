import React from 'react'
import './QuestionChooseFormType.scss'
import { ArrowUp, ArrowDown } from '../../../assets/Icons/Icons'
import { useQuestionForm } from '../../../context/context'

const QuestionChooseFormType = ({ elem, num }) => {
    const questionFormTypes = ["Bitta variantni tanlash", "Bir nechta variantni tanlash", "Qisqa javob", "To'liq javob", "Matn", "NPS so'rovnoma"];
    const [questionForms] = useQuestionForm();
    const [setquestionForms] = useQuestionForm(true);

    const setFormType = (v) => {
        let mas = [...questionForms];
        let object;
        if (v === "Bitta variantni tanlash" || v === "Bir nechta variantni tanlash") {
            object = {
                type: "",
                question: "",
                answers: ["", ""],
                must: false,
                trueAnswer: [],
            }
        } else {
            object = {
                type: "",
                question: "",
                must: false,
                trueAnswer: [],
            }
        }
        mas[num] = object;
        mas[num].type = v;
        setquestionForms(mas);
    }

    const dropdown = (event) => {
        let a = [...event.currentTarget.classList];
        a = a.filter(v => v === "show");
        if (a.length > 0) { event.currentTarget.classList.remove("show") }
        else { event.currentTarget.classList.add("show") }
    }

    return (
        <div className="questionChooseForm-type" onClick={(event) => { dropdown(event) }}>
            <div className="questionChooseForm-type-top">
                <p className="text">{elem.type}</p>
                <div className="arrows">
                    <ArrowUp />
                    <ArrowDown />
                </div>
            </div>
            <ul className="questionChooseForm-type-dropdown">
                {
                    questionFormTypes.map((v, i) => {
                        return <li key={i} onClick={() => setFormType(v)}><p>{v}</p></li>
                    })
                }
            </ul>
        </div>
    )
}

export default QuestionChooseFormType
