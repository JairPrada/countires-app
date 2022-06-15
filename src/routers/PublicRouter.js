import React from 'react'
import { Route, Routes } from "react-router-dom";
import { CountryDetailsPage } from '../pages/countryDetails/CountryDetailsPage';
import { HomePage } from '../pages/home/HomePage';
import { NoFoundPage } from '../pages/noFound/NoFoundPage';

export const PublicRouter = () => {
    return (
        <Routes>
            <Route path="/id/:countryId" element={<CountryDetailsPage />}></Route>
            <Route path="/" exact element={<HomePage />} />
            <Route path="*" element={<NoFoundPage />}></Route>
        </Routes>
    )
}
