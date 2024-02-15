import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const GALLERY_LINK = 'gallery-link';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(q) {
  const searchParams = new URLSearchParams({
    key: 'a5fd3939-90ba-4678-86ee-0a0c8fb3d061',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safeSearch: true,
  });

  const PARAMS = `?${searchParams}`;
  const url = BASE_URL + PARAMS;

  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      toastError(`Error fetching images: ${error}`);
      throw error;
    });
}

export { fetchImages, GALLERY_LINK };
