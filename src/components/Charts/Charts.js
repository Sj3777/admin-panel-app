import React from 'react'
import "./Charts.css"
import Chart from "react-apexcharts";
const p = {
    options: {
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100],
            },
        },
        stroke: {
            width: 7,
            curve: 'smooth',
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '1/11/2000',
                '2/11/2000',
                '3/11/2000',
                '4/11/2000',
                '5/11/2000',
            ],
        },
    },
    series: [
        {
            name: 'Likes',
            data: [4, 3, 10, 9, 29],
        },
    ],
}
const Charts = () => {

    return (
        <div className="chartContainer">
            <div className="charts">
                <h3 className="chartTitle">Charts</h3>
                <Chart {...p} />
            </div>
            <div className="charts2">
                <h3 className="chartTitle">Charts</h3>
            </div>
        </div>
    )
}

export default Charts
