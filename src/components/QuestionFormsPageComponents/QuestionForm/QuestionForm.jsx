import React from 'react'
import './QuestionForm.scss'
import { useQuestionForm } from '../../../context/context';
import { Check, Trash } from '../../../assets/Icons/Icons'

const QuestionForm = ({ form, num }) => {
    const [questionForms] = useQuestionForm();
    const [setquestionForms] = useQuestionForm(true);

    let mas = [...questionForms];

    const typing = (event) => {
        mas[num].question = event.target.value;
        setquestionForms(mas);
    }

    const addAnswer = () => {
        mas[num].answers.push("");
        setquestionForms(mas);
    }
    let l = -1;
    const typingAnswer = (event, i) => {
        mas[num].answers[i] = event.target.value;
        mas[num].trueAnswer.map((v, i) => {
            if (v === event.target.value) {
                l = i
                mas[num].trueAnswer[l] = event.target.value
            }
            return console.log();
        })
        setquestionForms(mas);
        console.log(questionForms);
    }

    const deleteAnswer = (i) => {
        mas[num].answers.splice(i, 1);
        setquestionForms(mas);
    }

    const chooseAnswer = (event, i) => {
        if (event.target.type === "radio") {
            mas[num].trueAnswer = [form.answers[i]]
        } else {
            if (event.target.checked) {
                mas[num].trueAnswer.push(form.answers[i]);
            } else {
                mas[num].trueAnswer.splice(i, 1);
            }
        }
        setquestionForms(mas);
    }

    return (
        <div className="question-form">
            <input type="text" className="question" placeholder="Savolni kiriting..." value={form.question} onChange={(event) => typing(event)} />
            {(form.answers &&
                form.answers.map((elem, i) => {
                    return <div className={`answer ${(form.type === "Bir nechta variantni tanlash" && "answerCheckbox")}`} key={i}>
                        {
                            (form.type === "Bitta variantni tanlash" &&
                                <div className="checkAnswerBox">
                                    <input type="radio" name={`radioAnswer${num}`} id={`radioAnswer${String(num) + String(i)}`} onChange={(event) => chooseAnswer(event, i)} />
                                    <label htmlFor={`radioAnswer${String(num) + String(i)}`}></label>
                                </div>) ||
                            <div className="checkAnswerBox">
                                <input type="checkbox" id={`checkboxAnswer${String(num) + String(i)}`} onChange={(event) => chooseAnswer(event, i)} />
                                <label htmlFor={`checkboxAnswer${String(num) + String(i)}`}><Check /></label>
                            </div>
                        }
                        <input type="text" placeholder={`Javob ${i + 1}`} value={elem} onChange={(event) => typingAnswer(event, i)} />
                        {(form.answers.length > 2 && <button onClick={() => deleteAnswer(i)}><Trash /></button>)}
                    </div>
                })
            )
            }
            {(form.answers &&
                <div className="question-form-bottom">
                    <button className="mainBtn" onClick={addAnswer}>Javob qo'shish</button>
                    <p>To'g'ri javoblar mavjud bo'lsa ularni belgilang!</p>
                </div>)}
        </div>
    )
}

export default QuestionForm
