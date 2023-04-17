import React from "react";
import './ExpenseDate.css'
const ExpenseDate = (props) => {
    const { date } = props;
    let dateObject = new Date(date)

    const month = dateObject.toLocaleString('en-us', {month:'long'})
    const day = dateObject.toLocaleString('en-us', {day:'numeric'})
    const year = dateObject.getFullYear()

    return(
        <div>
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__day">{day}</div>
                <div className="expense-date__year">{year}</div>
            </div>
        </div>
    )
}

export default ExpenseDate;