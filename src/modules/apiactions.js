import { name, score, url } from './uielements.js';
// ===============================================================
export const postData = async () => {
  const data = {
    user: name.value,
    score: score.value,
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
  await res;
  name.value = '';
  score.value = '';
};

// ===============================================================
export const getData = async () => {
  const res = await fetch(url).then((res) => res.json());
  return res;
};
// ===============================================================
