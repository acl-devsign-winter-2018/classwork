
export function register(credentials) {
  if(credentials.email === 'bad@bad.com') return Promise.reject('Email is already in use');
  
  return Promise.resolve({
    name: credentials.name
  });
}