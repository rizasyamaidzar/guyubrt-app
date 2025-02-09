import React from 'react';
import ReactApexChart from 'react-apexcharts'; // Ensure this is installed
// import { Expenses } from '../pages';

const Chart = ({ Income, Expense }) => {
    const [state, setState] = React.useState({
        series: [
            {
                name: 'Pemasukan',
                type: 'column',
                data: Income
            },
            {
                name: 'Pengeluaran',
                type: 'column',
                data: Expense
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                stacked: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [1, 1, 4]
            },
            title: {
                text: 'Uang Kas RT',
                align: 'left',
                offsetX: 110
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yaxis: [
                {
                    seriesName: 'Pemasukan',
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#008FFB'
                    },
                    labels: {
                        style: {
                            colors: '#008FFB',
                        }
                    },
                    title: {
                        text: "Pemasukan ",
                        style: {
                            color: '#008FFB',
                        }
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                {
                    seriesName: 'Cashflow',
                    opposite: true,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: '#00E396'
                    },
                    labels: {
                        style: {
                            colors: '#00E396',
                        }
                    },
                    title: {
                        text: "Pengeluaran",
                        style: {
                            color: '#00E396',
                        }
                    },
                },

            ],
            tooltip: {
                fixed: {
                    enabled: true,
                    position: 'topLeft',
                    offsetY: 30,
                    offsetX: 60
                },
            },
            legend: {
                horizontalAlign: 'left',
                offsetX: 40
            }
        },
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default Chart;