import React from 'react';
import './Logo.css';
import Image from '../../Image/096175aa-f7f2-4970-989d-d934c30b5551.png'

export const Logo = () => {

    return (

        <div>

            <div className="App">

                <img className="Corona" src={Image} alt="pix" />

                <div>

                    <p className="covid">COVID-19 TRACKER</p>

                    <p className="tay">VIRUS-19</p>

                    <br />

                    <p className="stay">CORONAVIRUS</p>


                </div>

            </div>

        </div>
    )
}
