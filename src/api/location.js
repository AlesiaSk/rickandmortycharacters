import axios from 'axios';

export const getAllLocations = (page) =>
    axios({
        method: 'get',
        url: `https://rickandmortyapi.com/api/location/?page=${page}`,
    });