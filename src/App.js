import React, { useEffect, useState } from 'react';
import './App.css';
import { LineDemo } from './Component/chart/chart';
import Paper from './Component/Cards/card.jsx';
import { Logo } from './Component/Logo/Logo.jsx';
import { fetchData } from './API';
import { Country } from './Component/country/country.jsx';
import { CountryChart } from './Component/CountryChart/CountryChart.jsx';


class App extends React.Component {



    state = {
        data: {},
        country: '',
    }




    async componentDidMount() {

        const Data = await fetchData();


        this.setState({ data: Data });
    }


    handleCountryChange = async(country) => {

        const Data = await fetchData(country);


        this.setState({ data: Data, country: country });
    }

    render() {

        const { data, country } = this.state

        console.log(data, "Covid")

        return (

            <div className = "header" >

                <div className = "component" >

                    <Logo />

                    <Paper data = { data }/>


                </div>

                <LineDemo />

                <Country handleCountryChange = { this.handleCountryChange }/>

                <CountryChart data={data} country={country} />

            </div>
        );
    }

}


export default App;