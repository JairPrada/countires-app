import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetailsAsync, selectCountryDetails, selectStatus } from '../../redux/reducer/globalSlice';
import { CountryDetailLoader } from '../../components/ui/loaders/CountryDetailLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ParseNum } from '../../utils';

export const CountryDetailsPage = () => {
    const { countryId } = useParams();
    const dispatch = useDispatch();
    const countryDetails = useSelector(selectCountryDetails);
    const status = useSelector(selectStatus);

    useEffect(() => {
        dispatch(getCountryDetailsAsync(countryId));
    }, [countryId, dispatch])

    return (
        <>
            {status === 'loading' ? <CountryDetailLoader /> :
                <>
                    <div className="mx-auto flex max-w-[1440px] flex-col px-4 py-4 md:px-12">
                        <Link to="/" className="self-start">
                            <div className="my-8 px-10 py-3 text-lg sm:my-16 card bg-elements-lt dark:bg-elements-dk rounded-md shadow-lg overflow-hidden">
                                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                                Back
                            </div>
                        </Link>

                        <div className="flex flex-wrap justify-between">
                            <img
                                src={countryDetails?.flags?.svg}
                                alt={`Flag of ${countryDetails?.name?.common}`}
                                className="w-full max-w-[400px] max-h-[300px] sm:max-w-[40%] object-contain "
                            />
                            <section className="text-base sm:min-w-[400px] ">
                                <h2 className="py-8 text-3xl font-bold">{countryDetails?.name?.common}</h2>
                                {(countryDetails?.currencies || countryDetails?.languages || countryDetails?.name) && <div>
                                    {propertiesCountry(countryDetails)}
                                    {limitCountries(countryDetails)}
                                </div>}
                            </section>
                        </div>
                    </div>
                </>
            }
        </>
    )

}

const propertiesCountry = (countryDetails) => {
    const currencies = Object.values(countryDetails.currencies).map((currency) => currency.name);
    const languages = Object.values(countryDetails.languages);
    const nativeName = Object.values(countryDetails.name.nativeName)[0].official;
    return (
        <div className="sm:flex sm:flex-wrap">
            <ul className="mb-8 sm:pr-16">
                <li key={countryDetails?.name?.common} className="pb-2">
                    <span className="font-bold">Native Name: </span> {nativeName}
                </li>
                <li key={countryDetails?.name?.common} className="pb-2">
                    <span className="font-bold">Population: </span> {ParseNum(countryDetails?.population)}
                </li>
                <li key={countryDetails?.name?.common} className="pb-2">
                    <span className="font-bold">Region: </span> {countryDetails?.region}
                </li>
                <li key={countryDetails?.name?.common} className="pb-2">
                    <span className="font-bold">Sub Region:</span> {countryDetails?.subregion}
                </li>
                <li key={countryDetails?.name?.common} className="pb-2">
                    <span className="font-bold">Capital: </span> {countryDetails?.capital}
                </li>
            </ul>
            <ul className="mb-8 sm:pr-16">
                <li key={countryDetails?.name?.common} className="pb-2">
                    <span className="font-bold">Top Level Domain :</span> {countryDetails?.tld}
                </li>
                <li key={countryDetails?.name?.common} className="pb-2">
                    <span className="font-bold">Currencies: </span> {currencies}
                </li>
                <li key={countryDetails?.name?.common} className="pb-2">
                    <span className="font-bold">Languages: </span> {languages}
                </li>
            </ul>
        </div>
    )
}

const limitCountries = (countryDetails) => {
    return (
        <div className="flex max-w-[600px] flex-wrap items-center">
            <span className="mr-4 mb-4 w-full text-base font-bold sm:w-auto">Border Countries:</span>
            {countryDetails?.borders?.map((country, index) => (
                <Link to={`/id/${country}`} key={country}
                >
                    <div className="mr-2 mb-2 w-[90px] px-8 py-2 card bg-elements-lt dark:bg-elements-dk rounded-md shadow-lg overflow-hidden">
                        {country}
                    </div>
                </Link>
            ))}
        </div>
    )
}