const BASE_URL = 'http://www.omdbapi.com';
const API_KEY = '3db77742';
const URL = `${BASE_URL}/?apikey=${API_KEY}`;

export function search(term) {
  const url = `${URL}&s=${encodeURIComponent(term)}`;

  return fetch(url)
    .then(response => response.json())
    .then(checkResponseData);
}

export function checkResponseData(data) {
  if(data.Response === 'True') return data;
  throw data.Error;
}