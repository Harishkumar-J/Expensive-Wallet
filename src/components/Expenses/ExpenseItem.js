import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);
	const titleHandler = () => {
		setTitle((prevState) => 'Changed');
	};

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
			</div>
			<div className='expense-item__price'>₹ {props.amount}</div>
			<button onClick={titleHandler}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;
