// All required elements
const contents = document.querySelector('.contents');
const name = document.querySelector('#name');
const score = document.querySelector('#score');
const submit = document.querySelector('#submit');
const refresh = document.querySelector('#refresh');
// ===============================================================

// Define all variables
const id = 'ITw4T6LnbGWmI6OESxvv';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
// ===============================================================
export {
  contents, name, score, submit, refresh, id, url,
};
