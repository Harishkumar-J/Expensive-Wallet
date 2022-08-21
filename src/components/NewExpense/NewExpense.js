import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
	const [expenseForm, setExpenseForm] = useState(false);

	const openExpenseFormHandler = () => {
		setExpenseForm(!expenseForm);
	};

	const toggleExpenseForm = () => {
		setExpenseForm(!expenseForm);
	};
	const saveExpenseDetailsHandler = (expenseData) => {
		const expenseDetails = {
			...expenseData,
			id: Math.random().toString(),
		};
		console.log(expenseDetails);
		//passing the expenseDetails to App.js using the props
		props.onAddExpense(expenseDetails);
	};
	return (
		<div className='new-expense'>
			{!expenseForm && (
				<button onClick={openExpenseFormHandler}>Add Your Expense</button>
			)}

			{expenseForm && (
				<ExpenseForm
					//onSaveExpenseDetails is a child to parents passing the props
					onSaveExpenseDetails={saveExpenseDetailsHandler}
					onCancelExpenseForm={toggleExpenseForm}
				/>
			)}
		</div>
	);
};
export default NewExpense;
