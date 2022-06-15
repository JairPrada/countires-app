import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { SearchCountry } from '../../components/ui/forms/searchCountry/SearchCountry';
import { SelectRegion } from '../../components/ui/forms/selectRegion/SelectRegion';
import { CountriesList } from '../../components/ui/lists/CountriesList'
import { getAllCountriesAsync, selectStatus } from '../../redux/reducer/globalSlice';
import { useSelector } from "react-redux";
import { HomeLoader } from '../../components/ui/loaders/HomeLoader';

export const HomePage = () => {
    const dispatch = useDispatch();
    const state = useSelector(selectStatus);
    useEffect(() => {
        dispatch(getAllCountriesAsync())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="mx-auto max-w-[1440px]">
            <div className="p-4 pb-0 sm:flex sm:justify-between md:px-12 md:py-14">
                <SearchCountry />
                <SelectRegion />
            </div>
            {state === "loading" ? <HomeLoader /> : <CountriesList />}
        </div>
    )
}
