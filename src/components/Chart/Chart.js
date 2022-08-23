import Chartbar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
	const dataPointExpense = props.dataPoints.map((datapoint) => datapoint.value);
	console.log(dataPointExpense);

	const monthlyMax = Math.max(...dataPointExpense);
	console.log(monthlyMax);
	return (
		<div className='chart'>
			{props.dataPoints.map((datapoint) => (
				<Chartbar
					key={datapoint.label}
					label={datapoint.label}
					value={datapoint.value}
					maxValue={monthlyMax}
				/>
			))}
		</div>
	);
};
export default Chart;
