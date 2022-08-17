import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
	const [userInput, setUserInput] = useState({
		title: '',
		amount: '',
		date: '',
	});
	const titleChangeHandler = (e) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				title: e.target.value,
			};
		});
	};
	const amountChangeHandler = (e) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				amount: e.target.value,
			};
		});
	};
	const dateChangeHandler = (e) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				date: e.target.value,
			};
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const expenseDetails = {
			title: userInput.title,
			amount: userInput.amount,
			date: new Date(userInput.date),
		};
		console.log(expenseDetails);
		//two-way binding (after submitting the form, we clear the form fields)
		setUserInput({
			title: '',
			amount: '',
			date: '',
		});
	};
	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={userInput.title}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						value={userInput.amount}
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						value={userInput.date}
						min='2020-01-01'
						max='2024-12-31'
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
