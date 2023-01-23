import React, { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ( {children} ) => {
    const [Feedback, setFeedback] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [FeedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit:false
    })

    useEffect(() => {
      fetchFeedback()
    }, [])
  
    const fetchFeedback = async () => {
      const response = await fetch(`/Feedback?_sort=id&_order=desc`)
      const data = await response.json()
  
      setFeedback(data)
      setIsLoading(false)
    }

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete')) {
          await fetch(`/Feedback/${id}`, { method: 'DELETE' })
          setFeedback(Feedback.filter((item) => item.id !== id))
        }}

      const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/Feedback/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updItem),
        })
    
        const data = await response.json()


        setFeedback(
          Feedback.map((item) => (item.id === id ? data : item)))
          setFeedbackEdit({
            item:{},
            edit: false
          })
        }

      const addFeedback = async (newFeedback) => {
        const response = await fetch('/Feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFeedback),
        })

        const data = await response.json()

        setFeedback([data, ...Feedback])
      }

      const editFeedback = (item) => {
        setFeedbackEdit({
          item,
          edit: true
        })
      }


    return <FeedbackContext.Provider value={{
        Feedback, deleteFeedback, addFeedback, editFeedback, FeedbackEdit, updateFeedback, isLoading,
    }}>
        { children }
    </FeedbackContext.Provider>
}

export default FeedbackContext