/* global process */

let get = url => fetch(url).then(response => response.json());

if(process.env.NODE_ENV !== 'production') {
  const storage = window.localStorage;
  
  const memoize = fn => url => {
    const data = storage.getItem(url);
    if(data) return Promise.resolve(JSON.parse(data));
  
    return fn(url).then(data => {
      storage.setItem(url, JSON.stringify(data));
      return data;
    });
  };
  
  get = memoize(get);
}

export { get };
