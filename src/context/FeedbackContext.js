import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const [feedback,setFeedback] = useState(
       [{
            id: 1,
            text: `item 1`,
            rating: 9
        },
        {
            id: 2,
            text: `item 2`,
            rating: 7
        },
        {
            id: 3,
            text: `item 3`,
            rating: 3
        },
    ])

    //Edit Feedback. The state itself contains the item and bool
    const [feedbackEdit,setFeedbackEdit] =useState({
        item:{},
        edit: false
    })
    //Delete Feedback
    const editFeedback = (item)=>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const deleteFeedback = (id) => {
        if (window.confirm(`are you sure you want to delete?`)) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }


    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback =(id, updItem)=>{
        setFeedback(feedback.map(item=>item.id === id? {...item,...updItem}: item))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
        
    }}>
    {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;