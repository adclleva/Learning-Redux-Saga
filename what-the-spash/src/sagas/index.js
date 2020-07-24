import { take, put, call } from 'redux-saga/effects'; // these are helpers

function* workerSaga() {
    console.log('Hey from worker');
    console.log(put({ type: 'ACTION_FROM_WORKER' }));
    yield put({ type: 'ACTION_FROM_WORKER' }); // we can use put to dispatch an action
}

function* byebyeSaga() {
    console.log('bye bye');
}

// watcher saga
function* rootSaga() {
    // every time an action of 'HELLO' is dispatched, we run this workerSaga generator once with take
    // yield take('HELLO', workerSaga);

    yield take('LOGIN');
    yield call(workerSaga);

    yield take('LOGOUT');
    yield call(byebyeSaga);
}

// watcher saga => actions => worker saga
export default rootSaga;
