import { get } from './request';

const KEY = 'AIzaSyBFPs02cU5hbJaCziaBtyOfbeHwf90dwI4';
const BOOKS_URL = `https://www.googleapis.com/books/v1/volumes?key=${KEY}`;

export function searchBooks(searchTerm, pageIndex = 0) {
  const url = `${BOOKS_URL}&q=${searchTerm}&maxResults=40&startIndex=${pageIndex}`;
  return get(url);
}
