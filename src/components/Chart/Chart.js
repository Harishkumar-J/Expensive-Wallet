import Chartbar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
	return (
		<div className='chart'>
			{props.dataPoints.map((datapoint) => (
				<Chartbar
					key={datapoint.label}
					label={datapoint.label}
					value={datapoint.value}
					maxValue={null}
				/>
			))}
		</div>
	);
};
export default Chart;
