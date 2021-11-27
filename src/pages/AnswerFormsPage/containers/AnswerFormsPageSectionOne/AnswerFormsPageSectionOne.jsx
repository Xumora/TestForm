import React, { useState } from 'react'
import './AnswerFormsPageSectionOne.scss'
import { useAnswerForm, useMust, useUserAnswer } from '../../../../context/context'
import AnswerFormBlock from '../../../../components/AnswerFormsPageComponents/AnswerFormBlock/AnswerFormBlock';
import { Link } from 'react-router-dom';

const AnswerFormsPageSectionOne = () => {
    const [answerForms] = useAnswerForm();
    const [userAnswers] = useUserAnswer();
    const [must] = useMust();
    const [setmust] = useMust(true);
    const [send, setsend] = useState(false);

    const sendForm = () => {
        let mas = [...must];
        let l = 0;
        answerForms.map((elem, i) => {
            if (elem.must && userAnswers[i].answer.length === 0) {
                mas[i] = true;
            } else {
                mas[i] = false;
                l = l + 1;
            }
            return console.log();
        })
        setmust(mas);
        l === answerForms.length ? setsend(true) : console.log(0);
    }
    return (
        <div className="answerFormsPage-sectionOne">
            <div className="answerFormsPage-sectionOne-inner container">
                <h1 className="answerFormsPage-sectionOne-inner-title">Formani to'ldiring</h1>
                <div className="answerFormsPage-sectionOne-inner-main">
                    {
                        must.map((elem, i) => {
                            return <div className="answerFormsPage-sectionOne-inner-main-formBox" key={i}>
                                <AnswerFormBlock elem={answerForms[i]} i={i} must={elem} />
                            </div>
                        })
                    }
                </div>
                <div className="answerFormsPage-sectionOne-inner-bottom">
                    <button className="mainBtnTwo" onClick={sendForm}>Yuborish</button>
                    {send && <p>Javobingiz yuborildi</p>}
                    <Link to="/useranswers">to</Link>
                </div>
            </div>
        </div>
    )
}

export default AnswerFormsPageSectionOne
