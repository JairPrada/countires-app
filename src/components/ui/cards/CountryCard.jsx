import React from 'react'
import { Link } from 'react-router-dom'
import { ParseNum } from '../../../utils'

export const CountryCard = ({ country }) => {
    return (
        <Link to={`id/${country.cca3}`} className="self-start">
            <div className="mb-10 max-w-[400px]  sm:mr-4 sm:w-[290px] card bg-elements-lt dark:bg-elements-dk rounded-md shadow-lg overflow-hidden hover:scale-105 transition-property:scale duration-1000 cursor-pointer">
                <img
                    className="w-full sm:h-[200px] object-cover"
                    src={country.flags.svg}
                    alt={country.name.common}
                />
                <h2 className="p-4 text-xl font-bold">{country.name.common}</h2>
                <ul className="pl-4 pb-8 mt-5">
                    <li className="pb-1">
                        <span className="font-bold">Population: </span> {ParseNum(country.population)}
                    </li>
                    <li className="pb-1">
                        <span className="font-bold">Région: </span> {country.region}
                    </li>
                    <li className="pb-1">
                        <span className="font-bold">Capital: </span> {country.capital}
                    </li>
                </ul>
            </div>
        </Link>
    )
}
