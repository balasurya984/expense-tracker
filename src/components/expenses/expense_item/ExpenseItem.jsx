import React from "react";
import './ExpenseItem.css'
import ExpenseDate from "../expense_date/ExpenseDate";
import { useState } from 'react';

const ExpenseItem = (props) => {
    const {title, amount, date} = props;

    // const [modified_title, setModifiedTitle] = useState(title);
    // const onTitleChange = () => {
    //     setModifiedTitle("Updated")
    // }

    return(
        <li className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2> 
                <div className="expense-item__price"> ${amount}</div>
            </div>
            {/* <button onClick={onTitleChange}>Update</button> */}
        </li>
    )
};
export default ExpenseItem;