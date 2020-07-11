export const GET_CHARACTERS = 'GET_CHARACTERS';

export const getAllCharacters = (page) => {
    return {
        type: GET_CHARACTERS,
        page
    };
};
