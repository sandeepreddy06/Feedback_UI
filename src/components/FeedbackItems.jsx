import React, { useContext } from 'react'
import Cards from './shared/Cards'
import { FaTimesCircle, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackItems({ card }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Cards>
      <div className="num-display">{card.rating}</div>
      <button onClick={() => deleteFeedback(card.id)} className="close">
        <FaTimesCircle color='purple' />
      </button>
      <button onClick={() => editFeedback(card)} className="edit">
        <FaEdit color='purple' />
      </button>
      <div className="text-display">{card.text}</div>

    </Cards>
  )
}

export default FeedbackItems
