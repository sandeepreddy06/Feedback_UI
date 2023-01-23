import React, { useState, useContext, useEffect } from 'react'
import Cards from './shared/Cards'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackForm() {
    const { addFeedback, FeedbackEdit, updateFeedback } = useContext(FeedbackContext)
    const [rating, SetRating] = useState(null)
    const [text, SetText] = useState('')
    const [btnDisabled, SetBtnDisabled] = useState(true)
    const [msg, SetMsg] = useState('')


    useEffect(() => {
        if (FeedbackEdit.edit === true) {
            SetBtnDisabled(false)
            SetText(FeedbackEdit.item.text)
            SetRating(FeedbackEdit.item.rating)
        }
    }, [FeedbackEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            SetBtnDisabled(true)
            SetMsg(null)
        }
        else if (text !== '' && text.trim().length < 10) {
            SetBtnDisabled(true)
            SetMsg('Text must be at least 10 characters')
        }
        else {
            SetBtnDisabled(false)
            SetMsg(null)
        }

        SetText(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10 && rating !== null) {
            const newFeedback = {
                text,
                rating
            }
            if (FeedbackEdit.edit === true) {
                updateFeedback(FeedbackEdit.item.id, newFeedback)
            }
            else {
                addFeedback(newFeedback)
            }
            SetText('')
            SetRating(null)
        }
        else {
            SetMsg('Rating must be selected')
        }
    }


    return (
        <Cards>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your experience with us?</h2>
                <RatingSelect select={SetRating} selected={rating} />
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='Write a feedback' value={text} />
                    <Button type='submit' version='secondary' isDisabled={btnDisabled}>Submit</Button>
                </div>

                {msg && <div className='message'>{msg}</div>}
            </form>
        </Cards>
    )
}

export default FeedbackForm