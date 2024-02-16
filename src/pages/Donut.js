import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { timeTakenToComplete, totalTime } from '../dataset/data';

const Donut = () => {
    const data = {
        labels: ["Total Time", "Time taken"],
        datasets:
            [
                {
                    data: [totalTime, timeTakenToComplete],
                    backgroundColor: ["#4e73df", "#1cc88a"],
                    hoverBackgroundColor: ["#2e59d9", "#17a673"],
                    hoverBorderColor: "rgba(234, 236, 244, 1)"
                }]
    }

    const options = {
        maintainAspectRatio: !1,
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
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: "#dddfeb",
            borderWidth: 1,
            displayColors: !1,
        }, legend: { display: !1 }, cutoutPercentage: 80
    }

    return <Doughnut data={data} options={options} />;
};

export default Donut;
