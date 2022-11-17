import './style.css';
import {
  contents,
  name,
  score,
  submit,
  refresh,

} from './modules/uielements.js';
import { postData, getData } from './modules/apiactions.js';
// ===============================================================
submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (name.value === '' || score.value === '') {
    // eslint-disable-next-line no-alert
    alert('Please enter the values');
  } else {
    postData();
  }
});
// ===============================================================
const UI = async () => {
  getData().then((result) => {
    result.result.forEach((item) => {
      contents.innerHTML += `
              <div class="content">
              <span id="names">${item.user}</span> : <span id="scores">${item.score}</span>
            </div>
              `;
    });
  });
};
UI();
// ====================================================
refresh.addEventListener('click', () => {
  UI();
});
