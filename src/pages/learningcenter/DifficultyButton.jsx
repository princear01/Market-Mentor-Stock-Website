import React from 'react'

function DifficultyButton({difficulty, explanation, link, divstyle, pstyle}) {
  return (
    <a href={link}>
        <div className={divstyle}>
          <h2>{difficulty}</h2>
        </div>
        <p className={pstyle}>{explanation}</p>    
    </a>
  )
}

export default DifficultyButton