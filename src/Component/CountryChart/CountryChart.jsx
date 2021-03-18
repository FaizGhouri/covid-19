import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../CountryChart/CountryChart.css'


export const CountryChart = ({ data: { confirmed, recovered, deaths }, country }) => {


    const barChart = (

        confirmed

            ? (
                <Doughnut
                    data={{
                        datasets: [{
                           
                            backgroundColor: [
                                'rgba(255, 0,0 ,0.5)',
                                'rgba(0, 0,255 ,0.5)',
                                'rgba(0, 255,0 ,0.5)',
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }],
                        labels: ['Infected', 'Recovered', 'Deaths'],
                    }}
                    options={{
                        legend: { display: true },
                        title: { display: true, text: `Current State in ${country}` },
                        responsive: true,
                        animation: {
                            animateRotate: true
                        },
                        cutoutPercentage: 50,
                        rotation: Math.PI ,
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


