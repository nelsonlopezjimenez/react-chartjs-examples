import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import faker from 'faker';
import { getAquisitionsByYear } from './api'

ChartJS.register();

let outsideData = {};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

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

const data1 = async function () {
    const data2 = await getAquisitionsByYear();
    const data3 = {
        labels: data2.map(row => row.year),
        datasets: [
            {
                type: 'bar',
                label: "Acquisition by Year",
                data: data2.map(row => row.count),
            },
        ],
    };
    return data3
}

export function Acquisitions() {
    const newData = data1();
    console.log(newData);
    newData.then((m) => console.log(m));

    newData.then(m => {
        outsideData.labels = m.labels;
        outsideData.datasets = m.datasets
    })
    return (<>
        <Chart type='bar' data={data} />
        <Chart type='bar' data={outsideData} />

    </>)

}
