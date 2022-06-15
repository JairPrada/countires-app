import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { filterCountry, selectActualRegion, selectAllCopyCountries, selectRegions, setActualRegion } from '../../../../redux/reducer/globalSlice';
import { useSelector, useDispatch } from "react-redux";

export const SelectRegion = () => {

    const [isListVisible, setIsListVisible] = useState(false);
    const dispatch = useDispatch();
    const regions = useSelector(selectRegions);
    const actualRegion = useSelector(selectActualRegion);
    const copyCountries = useSelector(selectAllCopyCountries);

    const selectRegion = (region) => {
        let value;
        switch (region) {
            case "America":
                value = "Americas";
                break;
            case "Reset":
                value = "";
                break;
            default:
                value = region;
                break;
        }
        if (value !== "") {
            const suggestions = copyCountries.filter((country) => country?.region?.toLowerCase() === value?.toLowerCase());
            dispatch(filterCountry(suggestions))
            setIsListVisible(false)
        } else {
            dispatch(filterCountry(copyCountries))
            setIsListVisible(false)
        }
        dispatch(setActualRegion(value))
    }

    return (
        <div id="region-selector" className="relative md:mr-4">
            <div className="mb-2 inline-block w-min[160px] sm:w-min[173px] card bg-elements-lt dark:bg-elements-dk rounded-md shadow-lg overflow-hidden">
                <button
                    type="button"
                    className="p-4 sm:p-6"
                    onClick={() => setIsListVisible(!isListVisible)}
                >
                    Filter by {actualRegion} Region
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className={` transition-all duration-700 ${isListVisible ? 'rotate-180 pr-2' : 'pl-2 '}`}
                    />
                </button>
            </div>

            <div className="absolute z-10 w-[160px] sm:w-[173px] card bg-elements-lt dark:bg-elements-dk rounded-md shadow-lg overflow-hidden">
                <ul
                    className={` overflow-hidden transition-all duration-700 ${isListVisible ? 'h-fit ' : 'max-h-0 '} `}
                >
                    {regions?.map((region) => (
                        <li
                            key={region}
                            className=" m-1 cursor-pointer rounded-md py-1 px-4 hover:bg-background-dk hover:text-text-dk"
                            onClick={() => selectRegion(region)}
                        >
                            {region}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

