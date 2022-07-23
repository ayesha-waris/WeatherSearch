import classes from './Bar.module.css'
import { Bar as Graph } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Bar = (props) => {
  const labels = [
    'Temperature',
    'Pressure',
    'Humidity'
     ];
  const data = {
    labels: labels,
    datasets: [{
      
      backgroundColor: 'rgba(6, 6, 85, 0.491)',
      label: props.state,
      borderColor: 'rgba(6, 6, 85, 0.491)',
      data: props.data,
     
    }]
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Weather Report',
        textFont: '20px',
      },
    },
  };

  return (
    <div className={classes.bar}>

  

    <Graph data={data}  options={options}/>
    </div>

    );
}
 
export default Bar;