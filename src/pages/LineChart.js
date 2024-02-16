import React from 'react';
import { Line } from 'react-chartjs-2';
import { convertedLIST } from '../dataset/data';


const LineChart = () => {
    const dataVis = {
        labels: convertedLIST[0]["name"],
        datasets: [
            {
                label: 'Time taken to complete each tasks',
                lineTension: 0.3,
                backgroundColor: 'rgb(22, 26, 45)',
                borderColor: '#61a5c5',
                pointBorderColor: '#61a5c5',
                pointBackgroundColor: '#61a5c5',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#61a5c5',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 3.5,
                pointHitRadius: 10,
                data: convertedLIST[0]["timeTaken"],
            },
            {
                label: 'Actual Time required to complete each tasks',
                lineTension: 0.3,
                backgroundColor: 'rgb(22, 26, 45)',
                borderColor: '#c59b61',
                pointBorderColor: '#c59b61',
                pointBackgroundColor: '#c59b61',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#c59b61',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 3.5,
                pointHitRadius: 10,
                data: convertedLIST[0]["avgTimeRequired"],
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                    font: {
                        size: 13,
                    }

                }
            }
        },
        maintainAspectRatio: !1,
        layout: {
            padding:
            {
                left: 10,
                right: 30,
                top: 2,
                bottom: 0
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: 'white'
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    color: 'white'
                },
                beginAtZero: true,
            }
        },
    };

    return <Line data={dataVis} options={options} />;
};

export default LineChart;
