import React from 'react'
import SeeAnswerBlock from '../../../../components/SeeAnswersPageComponents/SeeAnswerBlock/SeeAnswerBlock';
import { useUserAnswer } from '../../../../context/context'
import './SeeAnswersPageSectionOne.scss'

const SeeAnswersPageSectionOne = () => {
    const [userAnswers] = useUserAnswer();

    return (
        <div className="seeAnswersPage-sectionOne">
            <div className="seeAnswersPage-sectionOne-inner container">
                <h1 className="seeAnswersPage-sectionOne-inner-title">Javoblar</h1>
                <div className="seeAnswersPage-sectionOne-inner-main">
                    {
                        userAnswers.map((elem, i) => {
                            return <div className="seeAnswersPage-sectionOne-inner-main-box" key={i}>
                                <SeeAnswerBlock num={i} elem={elem} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SeeAnswersPageSectionOne
