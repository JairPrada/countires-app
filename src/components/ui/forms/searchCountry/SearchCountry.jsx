import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { filterCountry, selectActualRegion, selectAllCopyCountries } from '../../../../redux/reducer/globalSlice';

export const SearchCountry = (props) => {
    const copyCountries = useSelector(selectAllCopyCountries);
    const actualRegion = useSelector(selectActualRegion);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const value = event.target.value?.toLowerCase();
        let suggestions;
        if (actualRegion !== "") {
            suggestions = copyCountries.filter((country) => country?.name?.common?.toLowerCase().includes(value) && country?.region?.toLowerCase() === actualRegion?.toLowerCase())
        } else {
            suggestions = copyCountries.filter((country) => country?.name?.common?.toLowerCase().includes(value));
        }
        dispatch(filterCountry(suggestions))
    }
    
    return (
        <div className="mb-8 p-4 sm:p-6 card bg-elements-lt dark:bg-elements-dk rounded-md shadow-lg overflow-hidden">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
                type="text"
                placeholder="Search for a country..."
                className="ml-4 w-5/6 bg-elements-lt outline-none dark:bg-elements-dk sm:w-72"
                onChange={handleChange}
            />
        </div>
    );
};

