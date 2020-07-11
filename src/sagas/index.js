import { all } from 'redux-saga/effects';
import LocationSagas from './location';

export default function* rootSaga() {
    yield all([
        LocationSagas(),
    ]);
}