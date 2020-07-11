import axios from 'axios';

export const getAllCharacters = (page) =>
    axios({
        method: 'get',
        url: `https://rickandmortyapi.com/api/character/?page=${page}`,
    });