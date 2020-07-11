import { takeEvery, put, call } from 'redux-saga/effects';
import { getAllCharacters } from '../api/character';

function* fetchInfo({page}) {
    try {
        const { data } = yield call(() => getAllCharacters(page));
        yield put({ type: 'GET_CHARACTERS_SUCCESS', payload: data });
    } catch (e) {
        yield put({ type: 'GET_CHARACTERS_ERROR', error: e });
    }
}

function* actionWatcher() {
    yield takeEvery('GET_CHARACTERS', fetchInfo);
}

export default actionWatcher;
