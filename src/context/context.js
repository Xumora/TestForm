import React, { createContext, useContext, useState } from 'react'
const Context = createContext()

const FormProvider = ({ children }) => {

    const [questionForms, setquestionForms] = useState([]);
    const [answerForms, setanswerForms] = useState([])

    let a = [];
    answerForms.map((elem, i) => (
        a.push({ question: elem.question, answer: false })
    ))
    let b = [];
    answerForms.map((elem, i) => (
        b.push(false)
    ))
    const [userAnswers, setuserAnswers] = useState(a);
    const [must, setmust] = useState(b)

    const value = {
        questionForms,
        setquestionForms,
        answerForms,
        setanswerForms,
        userAnswers,
        setuserAnswers,
        must,
        setmust
    }

    return (
        <Context.Provider value={value}>
            <Context.Consumer>
                {
                    () => children
                }
            </Context.Consumer>
        </Context.Provider>
    )
}

const useQuestionForm = (setterOnly) => {
    const { questionForms, setquestionForms } = useContext(Context)
    return setterOnly ? [setquestionForms] : [questionForms, setquestionForms]
}

const useAnswerForm = (setterOnly) => {
    const { answerForms, setanswerForms } = useContext(Context)
    return setterOnly ? [setanswerForms] : [answerForms, setanswerForms]
}

const useUserAnswer = (setterOnly) => {
    const { userAnswers, setuserAnswers } = useContext(Context)
    return setterOnly ? [setuserAnswers] : [userAnswers, setuserAnswers]
}

const useMust = (setterOnly) => {
    const { must, setmust } = useContext(Context)
    return setterOnly ? [setmust] : [must, setmust]
}

export {
    FormProvider,
    useQuestionForm,
    useAnswerForm,
    useUserAnswer,
    useMust
}