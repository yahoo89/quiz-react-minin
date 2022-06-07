import React from 'react'
import classes from './AnswearItem.module.css'

const AnswearItem = props => {
  return (
    <li className={classes.AnswearItem}>
      {props.answear.text}
    </li>
  )
}

export default AnswearItem