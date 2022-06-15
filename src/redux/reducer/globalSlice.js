import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCountries, getCountryDetails } from "../../api/index";

const initialState = {
    countryId: 0,
    countries: [],
    copyCountries: [],
    regions: ['Africa', 'America', 'Asia', 'Europe', 'Oceania', 'Reset'],
    actualRegion: '',
    countryDetails: {},
    status: "idle",
    error: "",
};

// Actions
export const getAllCountriesAsync = createAsyncThunk(
    "globalSlice/getAllCountries",
    async () => {
        const response = await getAllCountries();
        return response;
    }
);
export const getCountryDetailsAsync = createAsyncThunk(
    "globalSlice/getCountryDetails",
    async (countryId) => {
        const response = await getCountryDetails(countryId);
        return response[0];
    }
);

//Reducer
export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        filterCountry: (state, action) => {
            state.countries = action.payload;
        },
        filterRegion: (state, action) => {
            state.countries = action.payload;
        },
        setActualRegion: (state, action) => {
            state.actualRegion = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCountriesAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllCountriesAsync.fulfilled, (state, action) => {
                state.countries = action.payload;
                state.copyCountries = action.payload;
                state.status = "idle";
            })
            .addCase(getAllCountriesAsync.rejected, (state, action) => {
                state.status = "idle";
                state.error = action.error.message;
            })
        builder
            .addCase(getCountryDetailsAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getCountryDetailsAsync.fulfilled, (state, action) => {
                state.countryDetails = action.payload;
                state.status = "idle";
            })
            .addCase(getCountryDetailsAsync.rejected, (state, action) => {
                state.status = "idle";
                state.error = action.error.message;
            });
    },
});

export const { filterCountry, filterRegion, setActualRegion } = globalSlice.actions;
// Selectors
export const selectAllCountries = (state) => state.global.countries;
export const selectAllCopyCountries = (state) => state.global.copyCountries;
export const selectRegions = (state) => state.global.regions;
export const selectCountryDetails = (state) => state.global.countryDetails;
export const selectCountryId = (state) => state.global.countryId;
export const selectStatus = (state) => state.global.status;
export const selectActualRegion = (state) => state.global.actualRegion;

export default globalSlice.reducer;
