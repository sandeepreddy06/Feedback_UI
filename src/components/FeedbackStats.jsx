import React, {  useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackStats() {
  const {Feedback} = useContext(FeedbackContext)

  let average = Feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / Feedback.length

  return (
    <div className='feedback-stats'>
      <h4>{Feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, '')}</h4>
    </div>
  )
}

export default FeedbackStats