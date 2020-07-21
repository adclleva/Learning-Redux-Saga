import { takeEvery, put } from 'redux-saga/effects'; // these are helpers

function* workerSaga() {
    console.log('Hey from worker');
    console.log(put({ type: 'ACTION_FROM_WORKER' }));
    yield put({ type: 'ACTION_FROM_WORKER' }); // we can use put to dispatch an action
}

// watcher saga
function* rootSaga() {
    // every time an action of 'HELLO' is dispatched, we run this workerSaga generator
    yield takeEvery('HELLO', workerSaga);
}

// watcher saga => actions => worker saga
export default rootSaga;
