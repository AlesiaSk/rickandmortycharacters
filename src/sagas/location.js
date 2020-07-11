import { takeEvery, put, call } from 'redux-saga/effects';
import { getAllLocations } from '../api/location';

function* fetchInfo({page}) {
    try {
        const { data } = yield call(() => getAllLocations(page));
        yield put({ type: 'GET_LOCATIONS_SUCCESS', payload: data });
    } catch (e) {
        yield put({ type: 'GET_LOCATIONS_ERROR', error: e });
    }
}

function* actionWatcher() {
    yield takeEvery('GET_LOCATIONS', fetchInfo);
}

export default actionWatcher;
