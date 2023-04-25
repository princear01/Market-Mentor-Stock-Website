import React from 'react'

function QuizButton({type, explanation, link, divstyle, pstyle}) {
    return (
        <a href={link}>
            <div className={divstyle}>
                <h2>{type}</h2>
            </div>
            <p className={pstyle}>{explanation}</p>
        </a>
    )
}

export default QuizButton