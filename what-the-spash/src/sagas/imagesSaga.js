import { takeEvery, select, call, put } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchImages } from '../api';
import { setImages, setError } from '../actions';

// this will get the state from nextPage
const getPage = state => state.nextPage;

// this is the worker sag that will asynchronously load the images
function* handleImagesLoad() {
    // we use this try catch to handle errors with the unsplash api
    try {
        // the select effect requires us to pass in a function
        // in this case it will get a slice of our global state which will be the pageReducer
        const page = yield select(getPage);
        // console.log('page', page); we  test if the worker saga will work

        const images = yield call(fetchImages, page); // this will return a promise from our api

        // put would dispatch an action
        yield put(setImages(images));
    } catch (error) {
        // dispatch error
        yield put(setError(error.toString()));
    }
}

// this is our watcher saga
export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
