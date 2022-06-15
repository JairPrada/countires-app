import { config } from "../config/environment";

export const getAllCountries = () => {
    return new Promise((resolve, reject) => {
        fetch(`${config.API_ENDPOINT}/all`)
            .then((responseNode) => {
                if (responseNode.status === 200) {
                    responseNode.json().then((response) => {
                        resolve(response)
                    })
                } else {
                    responseNode.json().then((response) => {
                        reject(response)
                    })
                }
            })
            .catch((error) => reject(error))
    });
};

export const getCountryDetails = (countryCode) => {
    return new Promise((resolve, reject) => {
        fetch(`${config.API_ENDPOINT}/alpha/${countryCode}`)
            .then((responseNode) => {
                if (responseNode.status === 200) {
                    responseNode.json().then((response) => {
                        resolve(response)
                    })
                } else {
                    responseNode.json().then((response) => {
                        reject(response)
                    })
                }
            })
            .catch((error) => reject(error))
    });
};



