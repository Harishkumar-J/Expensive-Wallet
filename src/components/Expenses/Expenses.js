import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2022');

	const filterByYearHandler = (selectedYear) => {
		console.log(selectedYear);
		setFilteredYear(selectedYear);
	};
	console.log('state = ' + filteredYear);

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});
	return (
		<>
			<Card className='expenses'>
				<ExpenseFilter
					defaultYear={filteredYear}
					onYearFilter={filterByYearHandler}
				/>
				{filteredExpenses.length == 0 ? (
					<p style={{ color: 'grey' }}>No Expenses Found</p>
				) : (
					filteredExpenses.map((expenseItem) => (
						<ExpenseItem
							key={expenseItem.id}
							title={expenseItem.title}
							amount={expenseItem.amount}
							date={expenseItem.date}
						/>
					))
				)}
			</Card>
		</>
	);
};

export default Expenses;
