const environment = "production";

const envConfig = {
    production: {
        API_ENDPOINT:
            process.env.API_ENDPOINT || "https://restcountries.com/v3.1",
    },
    testing: {
        API_ENDPOINT:process.env.API_ENDPOINT || "https://restcountries.com/test",
    },
    dev: {
        API_ENDPOINT: process.env.API_ENDPOINT || "http://localhost:8000/api",
    }
};

export const config = envConfig[environment];
