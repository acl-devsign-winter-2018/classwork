// update this with your username
const cloudinaryUser = 'anwarmontasir';
const FETCH_URL = `http://res.cloudinary.com/${cloudinaryUser}/image/upload`;

export const getURL = (fileName, options = '') => {
  return `${FETCH_URL}/${options}/${fileName}`;
};