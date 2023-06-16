import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import faker from 'faker';
import { getAquisitionsByYear } from './api'

ChartJS.register();

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data1 = async function () {
    const data = await getAquisitionsByYear();
    const obj = {
        labels,
        datasets: [
            {
                type: 'bar',
                label: 'Bar Acq by Year',
                data: {
                    labels: data.map(row => row.year),
                    datasets: [
                        {
                            label: 'Acquisitions by year',
                            data: data.map(row => row.count)
                        }
                    ]
                }
            }
        ]
    }
    // console.log(data);
    return obj;
}

const data = {
    labels,
    datasets: [
        {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: 'rgb(75, 192, 192)',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'white',
            borderWidth: 2,
        },
    ],
};

export function Acquisitions() {
    return <Chart type='bar' data={data} />
}

// (async function () {
//     const data = await getAquisitionsByYear();

//     new Chart(
//         document.getElementById('acquisitions'),
//         {
//             type: 'bar',
//             options: {
//                 animation: false,
//                 plugins: {
//                     legend: {
//                         display: false
//                     },
//                     tooltip: {
//                         enabled: false
//                     }
//                 }
//             },
//             data: {
//                 labels: data.map(row => row.year),
//                 datasets: [
//                     {
//                         label: 'Acquisitions by year',
//                         data: data.map(row => row.count)
//                     }
//                 ]
//             }
//         }
//     );
// });
