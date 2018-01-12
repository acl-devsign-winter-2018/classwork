const KEY = 'AIzaSyBFPs02cU5hbJaCziaBtyOfbeHwf90dwI4';
const BOOKS_URL = `https://www.googleapis.com/books/v1/volumes?key=${KEY}`;

const storage = window.localStorage;

export function searchBooks(searchTerm, pageIndex = 0) {
  const url = `${BOOKS_URL}&q=${searchTerm}&maxResults=40&startIndex=${pageIndex}`;

  const data = storage.getItem(url);
  if(data) return Promise.resolve(JSON.parse(data));

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      storage.setItem(url, JSON.stringify(data));
      return data;
    });
}

