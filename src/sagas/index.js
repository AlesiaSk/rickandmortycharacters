import { all } from 'redux-saga/effects';
import Character from './character';

export default function* rootSaga() {
    yield all([
        Character(),
    ]);
}