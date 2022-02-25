import React from 'react'

export const Words = ({selectedWord , correctLetters}) => {
  return (
    <div className="word">
        {
            selectedWord.split('').map((letter, index) => {
                return (
                    <span className='letter' key={index}>
                        {correctLetters.includes(letter) ? letter : ''}
                    </span>
                )
            })
        }
    </div>
  )
}
