import { all } from 'redux-saga/effects'; // similar to the promise all

import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';

export default function* rootSaga() {
    yield all([imagesSaga(), statsSaga()]);
}
