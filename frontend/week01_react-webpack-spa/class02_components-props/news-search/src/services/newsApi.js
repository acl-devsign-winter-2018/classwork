
const API_KEY = '9e217382d31d48af8c3bc200cdc6ddbd';
const BASE_URL = 'https://newsapi.org/v2/everything?sortBy=publishedAt';

export function search(topic, page = 1, pageSize = 20) {
  const url = `${BASE_URL}&q=${topic}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  
  return fetch(url).then(r => {
    if(r.ok) return r.json();
    return r.json().then(json => { throw json; });
  });
}