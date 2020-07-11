export const GET_LOCATIONS = 'GET_LOCATIONS';

export const getAllLocations = (page) => {
    return {
        type: GET_LOCATIONS,
        page
    };
};
