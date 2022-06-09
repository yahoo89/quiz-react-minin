import React from 'react'
import classes from './AnswearList.module.css'
import AnswearItem from './AnswearItem/AnswearItem'

const AnswearList = props => (
  <ul className={classes.AnswearList}>
    {props.answears.map((answear, index) => {
      return (
        <AnswearItem
          key={index}
          answear={answear}
          onAnswearClick={props.onAnswearClick}
          answearStatus={props.answearStatus ? props.answearStatus[answear.id] : null}
        />
      )
    })}
  </ul>
)

export default AnswearList