import React from 'react';
import Highcharts from 'highcharts';

export default class BarGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: 'Leave', data: [{
                    name: 'AB',
                    y: 0.87,
                    color: '#3498db'
                },
                {
                    name: 'FV',
                    y: 0.0,
                    color: '#9b59b6'
                },
                {
                    name: 'CT',
                    y: 0.0,
                    color: '#2ecc71'
                },
                {
                    name: 'EV',
                    y: 2.87,
                    color: '#f1c40f'
                },
                {
                    name: 'CF',
                    y: 0.0,
                    color: '#F47373'
                },
                {
                    name: 'TO',
                    y: 3.0,
                    color: '#BA68C8'
                }
                ]
            }]
        }
    }

    componentDidMount() {
        this.highChartsRender();
    }

    highChartsRender() {
        Highcharts.chart({
            chart: {
                type: 'column',
                renderTo: 'timeOff-balance'
            },
            title: {
                //verticalAlign: 'middle',
                floating: true,
                text: 'TimeOff Balance for the year 2018',
                style: {
                    fontSize: '30px',
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        format: '{point.name}: {point.percentage:.1f} %'
                    },
                    innerSize: '70%'
                }
            },
            series: this.state.series
        });
    }

    render() {
        return (
            <div id="timeOff-balance">
            </div>
        );
    }
}
