import React from 'react'
import { selectAllCountries } from '../../../redux/reducer/globalSlice';
import { useSelector } from "react-redux";
import { CountryCard } from '../cards/CountryCard';

export const CountriesList = () => {

    const countries = useSelector(selectAllCountries);

    return (
        <div>
            <h2 className="md:px-12 px-4 pb-5 font-semibold" >{countries?.length} countries found</h2>
            <div className="grid justify-center gap-6 px-4 sm:grid-cols-gallery md:px-12">
                {countries?.map((country) => (
                    <CountryCard country={country} key={country.cca3} />
                ))}
            </div>
        </div >
    )
}
