import React, { Component, useState, useEffect } from 'react';
import '../chart/Charts.css'
import { Line, Bar, Chart } from 'react-chartjs-2';
import { fetchDailyData } from '../../API/index';
import { CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';




export const LineDemo = ({ GLobalData: { confirmed, recovered, deaths, lastUpdate } }) => {



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



    console.log(confirmed, "Confirmed Data")

    if (!confirmed) {
        return 'Loading....'
    }


    return (

        <div className='LineChart'>

            <div className="global">

                <div className="box">

                    <div className="Grid">

                        <div className="Death">

                            <CardContent className="card">

                                <p className="font" gutterBottom>INFECTED</p>

                                <Typography className="vari" style={{ fontSize: 40 }} variant="h5">

                                    <CountUp start={0} end={confirmed.value} duration={5} separator=',' />

                                </Typography>

                                <Typography className="vari" variant='body2'>{new Date(lastUpdate).toDateString()}</Typography>

                                <Typography className="vari" variant='body2'>Number of active case covid-19</Typography>

                            </CardContent>

                            <CardContent className="card">

                                <p className="fire" gutterBottom>RECOVERED</p>

                                <Typography className="vari" style={{ fontSize: 40 }} variant="h5">

                                    <CountUp start={0} end={recovered.value} duration={5} separator=',' />


                                </Typography>

                                <Typography className="vari" variant='body2'>{new Date(lastUpdate).toDateString()}</Typography>


                                <Typography className="vari" variant='body2'>Number of Recovered case covid-19</Typography>

                            </CardContent>

                            <CardContent className="card">

                                <p className="fao" gutterBottom>DEATH</p>

                                <Typography className="vari" style={{ fontSize: 40 }} variant="h5">

                                    <CountUp start={0} end={deaths.value} duration={5} separator=',' />

                                </Typography>

                                <Typography className="vari" variant='body2'>{new Date(lastUpdate).toDateString()}</Typography>

                                <Typography className="vari" variant='body2'>Number of Death case covid-19</Typography>

                            </CardContent>


                        </div>

                    </div>

                </div>
            </div>

            <div className="chart">

                {lineChart}

            </div>

        </div>
    );
}

