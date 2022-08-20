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
	return (
		<>
			<Card className='expenses'>
				<ExpenseFilter
					defaultYear={filteredYear}
					onYearFilter={filterByYearHandler}
				/>
				{props.items.map((expenseItem) => (
					<ExpenseItem
						key={expenseItem.id}
						title={expenseItem.title}
						amount={expenseItem.amount}
						date={expenseItem.date}
					/>
				))}
			</Card>
		</>
	);
};

export default Expenses;
