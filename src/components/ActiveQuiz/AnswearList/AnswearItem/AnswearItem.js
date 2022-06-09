import React from 'react'
import classes from './AnswearItem.module.css'

const AnswearItem = props => {
  const cls = [classes.AnswearItem]

  if (props.answearStatus) {
    cls.push(classes[props.answearStatus])
  }

  return (
    <li
      className={cls.join(' ')}
      onClick={() => props.onAnswearClick(props.answear.id)}
    >
      {props.answear.text}
    </li>
  )
}

export default AnswearItem