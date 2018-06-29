import React, { Fragment } from 'react'
import ArrowDownIcon from './arrow-down.svg'
import ArrowLeftIcon from './arrow-left.svg'
import './Arrow.css'

const OPTION_ARROW = 'OPTION_ARROW'

const Arrow = (props) => {
  const handleClickArrow = () => {
    props.displaySubColumn(OPTION_ARROW)
  }
  const ArrowDown = <img className="icon-arrow" src={ArrowDownIcon} onClick={handleClickArrow} />
  const ArrowLeft = <img className="icon-arrow" src={ArrowLeftIcon} onClick={handleClickArrow} />
  const ArrowOrientation = props.picked
    ? ArrowDown
    : ArrowLeft
  return (
    <Fragment>
      {ArrowOrientation}
    </Fragment>
  )
}

export default Arrow