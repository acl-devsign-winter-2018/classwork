
const user = 'martypdx';
const URL = `http://localhost:3000/api/${user}/notes`;

function load() {
  return fetch(URL)
    .then(response => response.json());
}

function add(note) {
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(note),
    headers: {
      'content-type': 'application/json'
    },
  }).then(response => response.json());
}

function update(note) {
  return fetch(`${URL}/${note.id}`, {
    method: 'PUT',
    body: JSON.stringify(note),
    headers: {
      'content-type': 'application/json'
    },
  }).then(response => response.json());
}

function remove(id) {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE'
  }).then(response => response.json());
}

function addComment(noteId, comment) {
  return fetch(`${URL}/${noteId}/comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'content-type': 'application/json'
    },
  }).then(response => response.json());
}

function removeComment(noteId, commentId) {
  return fetch(`${URL}/${noteId}/comments/${commentId}`, {
    method: 'DELETE',
  }).then(response => response.json());
}

export default {
  add,
  load,
  update,
  remove,
  addComment,
  removeComment
};