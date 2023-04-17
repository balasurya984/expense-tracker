export const getAllExpenses = async (setExpenses) => {
    fetch('http://localhost:3005/api/v2/expenses')
    .then((response) => response.json())
    .then((expense_data) => setExpenses(expense_data.data))
}

export const addExpense = (postData = {}, callback) => {
    fetch('http://localhost:3005/api/v2/expenses',
    {
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(postData),
    })
    .then((response) => response.json())

    .then((data)=> {callback && callback();})
}