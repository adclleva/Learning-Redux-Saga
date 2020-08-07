// this is utilizing the unsplash api
const KEY = '?client_id=g72x2ou8KGAQ9qZXR0SCCb5-UJ8KIdx-V_HfQ5o_Dkc';
const URL = 'https://api.unsplash.com/photos/';

const fetchImages = async page => {
    const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    const data = await response.json();

    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

const fetchImageStats = async id => {
    const response = await fetch(`${URL}/${id}/statistics${KEY}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { fetchImages, fetchImageStats };
