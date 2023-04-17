import React from "react";
import ExpenseItem from "../expense_item/ExpenseItem";
import './ExpenseList.css'

const ExpenseList = (props) => {
    const { expenses = [] } = props;

    if(expenses.length == 0){
        return (<h1 style={{color:"red"}}>No Expense Found</h1>)
    }

    return(
        <ul className="expenses-list">
            {
                expenses.map((e) => {
                    return (
                        <ExpenseItem key={e.id || e._id} title={e.title} amount={e.amount} date={e.date} />
                    )
                })
            }
        </ul>
    )
}

export default ExpenseList;