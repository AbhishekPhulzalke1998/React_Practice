import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-plugin-stacked100';
import 'chartjs-plugin-annotation';
import { Chart as ChartJS, registerables } from 'chart.js';
import "./CrewStatusChart.scss";
ChartJS.register(...registerables, ChartDataLabels);

const CrewStatusChart = () => {
  const labels = ['Plow', 'Grader', 'District', 'Downtime'];
  const dataValues = [100, 60, 48, 0];
  const remainingValues = dataValues.map(value => 100 - value);

  const formatTime = (value) => {
    const totalHours = 24;
    const remainingHours = (100 - value) / 100 * totalHours;
    const hours = Math.floor(remainingHours);
    const minutes = Math.floor((remainingHours - hours) * 60);
    const seconds = Math.floor(((remainingHours - hours) * 60 - minutes) * 60);

    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Snow Plowed',
        backgroundColor: ['#43deef', '#CC4B3A', '#5c1d96', '#5c1d96'],
        borderColor: ['#43deef', '#CC4B3A', '#5c1d96', '#5c1d96'],
        borderWidth: 1,
        data: dataValues,
        datalabels: {
          labels: {
            startLabel: {
              align: 'end',
              anchor: 'start',
              color: 'black',
              font: {
                size: 14,
              },
              formatter: (value, context) => {
                return labels[context.dataIndex];
              },
            },
          },
        },
      },
      {
        label: 'Plow Remaining',
        backgroundColor: '#fff', 
        borderColor:'#fff',
        borderWidth: 1,
        data: remainingValues,
        datalabels: {
          labels: {
            endLabel: {
              align: 'start',
              anchor: 'end',
              color: ['green','red','pink','blue'],
              font: {
                size: 14,
              },
              formatter: (value, context) => {
                return formatTime(dataValues[context.dataIndex]);
              },
            },
          },
        },
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          callback: function(value) {
            return value + '%';
          },
          stepSize: 20,
        },
        max: 100,
      },
      y: {
        stacked: true, // Ensure stacking on the y-axis as well for horizontal continuity
      },
    },
    plugins: {
      datalabels: {
        display: true,
      },
    },
    layout: {
      padding: {
        right: 50,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className='card-style'>
      <div className='heading-style'>
        <div>Start Date: Thursday, Dec 18 (2:18 pm)</div>
        <div>Active Crews: 6</div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CrewStatusChart;
