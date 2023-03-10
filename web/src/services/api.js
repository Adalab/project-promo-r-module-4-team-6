function callToApi(data) {
  return fetch('/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export default callToApi;

// https://dev.adalab.es/api/card
