const BASE_URL = 'http://www.omdbapi.com';
const API_KEY = '3db77742';
const URL = `${BASE_URL}/?apikey=${API_KEY}`;

const get = url => fetch(url)
  .then(response => response.json())
  .then(checkResponseData);

export const checkResponseData = data => {
  if(data.Response === 'True') return data;
  throw data.Error;
};


export function search(term) {
  const url = `${URL}&s=${encodeURIComponent(term)}`;
  return get(url);
}

export function getMovie(id) {
  const url = `${URL}&i=${id}`;
  return get(url);
}

