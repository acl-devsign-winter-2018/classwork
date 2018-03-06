
const user = 'martypdx';
const URL = `http://localhost:3000/api/${user}/notes`;

const doFetch = (url, options = {}) => {
  return fetch(url, options)
    .then(response => {
      if(response.ok) return response.json();

      return response.json().then(body => {
        if(body.message) throw body.message;
        if(body.error) throw body.error;
        throw body;
      });
    });
};

function load() {
  return doFetch(URL);
}

function add(note) {
  return doFetch(URL, {
    method: 'POST',
    body: JSON.stringify(note),
    headers: {
      'content-type': 'application/json'
    },
  });
}

function update(note) {
  return doFetch(`${URL}/${note.id}`, {
    method: 'PUT',
    body: JSON.stringify(note),
    headers: {
      'content-type': 'application/json'
    },
  });
}

function remove(id) {
  return doFetch(`${URL}/${id}`, {
    method: 'DELETE'
  });
}

function addComment(noteId, comment) {
  return doFetch(`${URL}/${noteId}/comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'content-type': 'application/json'
    },
  });
}

function removeComment(noteId, commentId) {
  return doFetch(`${URL}/${noteId}/comments/${commentId}`, {
    method: 'DELETE',
  });
}

export default {
  add,
  load,
  update,
  remove,
  addComment,
  removeComment
};