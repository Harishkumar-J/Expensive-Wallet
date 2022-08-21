import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
	const expenseList = props.items;
	if (expenseList.length === 0) {
		return <h2 className='expenses-list__fallback'>No Expenses Found</h2>;
	}
	return (
		<ul className='expenses-list'>
			{expenseList.map((expenseItem) => (
				<ExpenseItem
					key={expenseItem.id}
					title={expenseItem.title}
					amount={expenseItem.amount}
					date={expenseItem.date}
				/>
			))}
		</ul>
	);
};

export default ExpenseList;
