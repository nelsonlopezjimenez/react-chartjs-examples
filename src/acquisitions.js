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



export function Acquisitions() {
    return (<>
        <Chart type='bar' data={data} />
    </>)

}
