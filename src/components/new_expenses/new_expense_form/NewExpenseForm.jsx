import React, { useState } from 'react'
import './NewExpenseForm.css'


const NewExpenseForm = (props) => {

    const { save } = props ;

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');


    const onChangeTitle = (event)=> {
        setTitle(event.target.value);
    }
    const onChangeAmount = (event)=> {
        setAmount(event.target.value);
    }
    const onChangeDate = (event)=> {
        setDate(event.target.value);
    }
    const onSubmitHandler = (event)=> {
        event.preventDefault();
        const new_expense = {
            title, 
            amount, 
            date:new Date(date)
        }
        save(new_expense);
    }

  return (
    <form name='form' action="" onSubmit={onSubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label htmlFor='title' >Title</label>
                <input id='title' name='title' type="text" onChange={onChangeTitle} value={title} />
            </div>
            <div className='new-expense__control'>
                <label htmlFor='amount'>Amount</label>
                <input id='title' name='amounr' type="number" onChange={onChangeAmount} value={amount} />
            </div>
            <div className='new-expense__control'>
                <label htmlFor='date'>Date</label>
                <input  type="date" name="date" id="title" onChange={onChangeDate} value={date} />
            </div>   
        </div>
        <div className='new-expense__actions'>
            <button type='reset'>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
      </form>
  )
}

export default NewExpenseForm
