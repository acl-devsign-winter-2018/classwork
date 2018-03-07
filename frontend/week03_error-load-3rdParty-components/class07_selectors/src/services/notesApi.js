
const URL = 'http://localhost:3000/api';

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

function loadUsers() {
  return doFetch(`${URL}/users`);
}

function load(user) {
  return doFetch(`${URL}/${user}/notes`);
}

function add(user, note) {
  return doFetch(`${URL}/${user}/notes`, {
    method: 'POST',
    body: JSON.stringify(note),
    headers: {
      'content-type': 'application/json'
    },
  });
}

function update(note) {
  return doFetch(`${URL}/notes/${note.id}`, {
    method: 'PUT',
    body: JSON.stringify(note),
    headers: {
      'content-type': 'application/json'
    },
  });
}

function remove(id) {
  return doFetch(`${URL}/notes/${id}`, {
    method: 'DELETE'
  });
}

function addComment(noteId, comment) {
  return doFetch(`${URL}/notes/${noteId}/comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'content-type': 'application/json'
    },
  });
}

function removeComment(noteId, commentId) {
  return doFetch(`${URL}/notes/${noteId}/comments/${commentId}`, {
    method: 'DELETE',
  });
}

export default {
  add,
  load,
  loadUsers,
  update,
  remove,
  addComment,
  removeComment
};