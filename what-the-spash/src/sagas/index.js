import { takeEvery, take, put, call } from 'redux-saga/effects'; // these are helpers

import { IMAGES } from '../constants';

function* handleImagesLoad() {
    console.log('fetching images from unsplash');
}

// watcher saga
function* rootSaga() {
    // every time the dispatch LOAD action is called, the handleImagesLoad runs
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

// watcher saga => actions => worker saga
export default rootSaga;

// watcher saga
// function* rootSaga() {
// every time an action of 'HELLO' is dispatched, we run this workerSaga generator once with take
// yield take('HELLO', workerSaga);
// yield take('LOGIN');
// yield call(workerSaga);
// yield take('LOGOUT');
// yield call(byebyeSaga);
// }

// function* workerSaga() {
// console.log('Hey from worker');
// console.log(put({ type: 'ACTION_FROM_WORKER' }));
// yield put({ type: 'ACTION_FROM_WORKER' }); // we can use put to dispatch an action
// }

// function* byebyeSaga() {
//     console.log('bye bye');
// }
