export const ParseNum = (number) => {
    return new Intl.NumberFormat("de-DE").format(number);
};
export const loadState = () => {
    try {
        const serializedData = localStorage.getItem("state");
        if (serializedData === null) {
            return undefined;
        }
        return JSON.parse(serializedData);
    } catch (error) {
        return undefined;
    }
};
export const saveState = (state) => {
    let serializedData = JSON.stringify(state);
    localStorage.setItem("state", serializedData);
};