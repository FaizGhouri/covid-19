import React from 'react';
import { Line, Bar, Chart } from 'react-chartjs-2';
import '../CountryChart/CountryChart.css'


export const CountryChart = ({ data: { confirmed, recovered, deaths }, country }) => {


    console.log(confirmed, recovered, deaths)

    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgba(0, 0,255 ,0.5)',
                                'rgba(0, 255,0 ,0.5)',
                                'rgba(255, 0,0 ,0.5)',
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current State in ${country}` }
                    }}
                />
            ) : null
    )


    return (

        <div className='Chartbox'>


            <div className='barChart'>

                {barChart}

            </div>

        </div>
    )
}


