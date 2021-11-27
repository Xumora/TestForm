import React from 'react'
import './QuestionFormNavigationBtn.scss'
import { ArrowDown, ArrowUp, Times } from '../../../assets/Icons/Icons'
import { useQuestionForm } from '../../../context/context'

const QuestionFormNavigationBtn = ({ i }) => {
    const [questionForms] = useQuestionForm();
    const [setquestionForms] = useQuestionForm(true);
    let mas = [...questionForms];

    const deleteForm = () => {
        mas.splice(i, 1);
        setquestionForms(mas);
    }

    const formUp = () => {
        [mas[i - 1], mas[i]] = [mas[i], mas[i - 1]];
        setquestionForms(mas);
    }

    const formDown = () => {
        [mas[i], mas[i + 1]] = [mas[i + 1], mas[i]];
        setquestionForms(mas);
    }

    return (
        <>
            {(i !== 0 && <button onClick={formUp}><ArrowUp /></button>)}
            {(i !== questionForms.length - 1 && <button onClick={formDown}><ArrowDown /></button>)}
            <button onClick={deleteForm}><Times /></button>
        </>
    )
}

export default QuestionFormNavigationBtn
