import { IMAGES } from '../constants';

const imagesReducer = (state = [], action) => {
    switch (action.type) {
        case IMAGES.LOAD_SUCCESS:
            // we use the spread operator as a better way to concatenate arrays
            return [...state, ...action.images];
        default:
            return state;
    }
};

export default imagesReducer;
