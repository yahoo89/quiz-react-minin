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
        />
      )
    })}
  </ul>
)

export default AnswearList