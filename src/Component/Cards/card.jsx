import React from 'react';
import './Card.css'
import { CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { start } from 'countup';

const Paper = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    console.log(confirmed, "Confirmed Data")

    if (!confirmed) {
        return 'Loading....'
    }


    return (

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
    )
}


export default Paper;