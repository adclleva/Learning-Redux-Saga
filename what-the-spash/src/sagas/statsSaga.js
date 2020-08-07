import { take, fork, put, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImageStats } from '../api';
import {
    loadImagesStats,
    setImagesStats,
    setImageStatsError,
} from '../actions';

function* handleStatsRequest(id) {
    // this has it try three times to load from the api
    for (let i = 0; i < 3; i++) {
        try {
            // console.log('fetching stats for', id);
            // this will load the stats with the id as the key
            yield put(loadImagesStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImagesStats(id, res.downloads.total));
            return true;
        } catch (error) {}
    }
    yield put(setImageStatsError(id));
}

export default function* watchStatsRequest() {
    while (true) {
        // this will keep watching for an action
        const { images } = yield take(IMAGES.LOAD_SUCCESS);

        // we can't do this
        // images.forEach(image => {
        //   yield fork(handleStatsRequest, image.id)
        // })

        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}
