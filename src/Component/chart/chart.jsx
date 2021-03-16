import React, { Component, useState, useEffect } from 'react';
import '../chart/Charts.css'
import { Line, Bar, Chart } from 'react-chartjs-2';
import { fetchDailyData } from '../../API/index';




export const LineDemo = () => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {

        const fetchAPI = async () => {

            setDailyData(await fetchDailyData());

        }


        fetchAPI();
    });


    const lineChart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Death',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true,
                        }, {
                            data: dailyData.map(({ recovered }) => recovered),
                            label: 'Recovered',
                            borderColor: 'green',
                            fill: true,
                        }],

                    }}

                />) : null
    );


    return (

        <div className='LineChart'>

            <div className="chart">

                {lineChart}

            </div>

        </div>
    );
}

