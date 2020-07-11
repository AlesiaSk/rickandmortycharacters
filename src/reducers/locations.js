import { GET_LOCATIONS } from '../actions/location';

const initialState = {
    info: {
        isLoading: false,
    },
    results: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_LOCATIONS:
            return { ...state, info: {  isLoading: true } };

        case 'GET_LOCATIONS_SUCCESS':
            return {
                ...state,
                info: { isLoading: false, pages: action.payload.info.pages },
                results: [...state.results, ...action.payload.results],
            };

        case 'GET_LOCATIONS_ERROR':
            return {
                ...state,
                info: {  isLoading: false, error: action.error },
            };

        default:
            return state;
    }
}
