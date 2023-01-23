import React, {  useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItems from './FeedbackItems'
import FeedbackContext from '../Context/FeedbackContext'
import Spinner from './shared/Spinner'


function Feedbackcard() {
  const {Feedback, isLoading} = useContext(FeedbackContext)

  if (!isLoading && (!Feedback || Feedback.length === 0)) {
    return <p>No Feedbacks Recieved Yet</p>
  }
  return isLoading ? (
  <Spinner />
  ) : (
    <div className="feedback-List">
      <AnimatePresence>
        {Feedback.map((card) => (
          <motion.div key={card.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <FeedbackItems key={card.id} card={card} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default Feedbackcard