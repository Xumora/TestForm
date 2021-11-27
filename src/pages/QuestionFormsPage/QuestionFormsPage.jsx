import React from 'react'
import QuestionFormsPageSectionOne from './containers/QuestionFormsPageSectionOne/QuestionFormsPageSectionOne'
import QuestionFormsPageSectionTwo from './containers/QuestionFormsPageSectionTwo/QuestionFormsPageSectionTwo'
import './QuestionFormsPage.scss'

const QuestionFormsPage = () => {
    return (
        <div className="questionFormsPage">
            <QuestionFormsPageSectionOne />
            <QuestionFormsPageSectionTwo />
        </div>
    )
}

export default QuestionFormsPage
