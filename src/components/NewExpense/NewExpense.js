import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
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
			{/* //onSaveExpenseDetails is a child to parents passing the props */}
			<ExpenseForm onSaveExpenseDetails={saveExpenseDetailsHandler} />
		</div>
	);
};
export default NewExpense;
