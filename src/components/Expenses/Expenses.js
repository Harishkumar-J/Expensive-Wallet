import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
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
				<ExpenseList items={filteredExpenses} />
			</Card>
		</>
	);
};

export default Expenses;
