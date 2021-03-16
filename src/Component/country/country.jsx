import React, { useEffect, useState } from 'react';
import '../country/count.css';
import { fetchCountries } from '../../API/index';
import { NativeSelect, FormControl } from '@material-ui/core';


export const Country = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {

        const fetchAPI = async () => {

            setFetchedCountries(await fetchCountries());

        }

        fetchAPI();


    }, [setFetchedCountries]);


    return (
        <div className="ContainerMain">



            <FormControl className="container">

                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>

                    <option value="">Global</option>

                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}

                </NativeSelect>

            </FormControl>



        </div>
    )
}
