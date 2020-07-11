import { GET_CHARACTERS } from '../actions/character';

const initialState = {
    info: {
        isLoading: false,
    },
    results: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHARACTERS:
            return { ...state, info: {  isLoading: true } };

        case 'GET_CHARACTERS_SUCCESS':
            return {
                ...state,
                info: { isLoading: false, pages: action.payload.info.pages },
                results: [...state.results, ...action.payload.results],
            };

        case 'GET_CHARACTERS_ERROR':
            return {
                ...state,
                info: {  isLoading: false, error: action.error },
            };

        default:
            return state;
    }
}
