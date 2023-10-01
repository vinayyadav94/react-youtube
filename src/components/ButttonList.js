import React from 'react'
import Button from './Button'

const ButttonList = () => {
  const buttonList = ['All','News','Mixes','Cinema','Music','Comedy','Drama','JavaScript','Angular','React','Hollywood']
  return (
    <div className='flex'>
      {buttonList.map(button => {
        return <Button name={button}/>
      })}
    </div>
  )
}

export default ButttonList