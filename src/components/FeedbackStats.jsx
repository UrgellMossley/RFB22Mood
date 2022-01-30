import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    //calculate ratings average
    let average = feedback.reduce((p,c)=>{
        return (p + c.rating)
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')
  return <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>{isNaN(average)? 0 : average}</h4>
        </div>;
}

export default FeedbackStats;
