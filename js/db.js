fetch('./data.json')
  .then(response => {
    if (!response.ok) throw new Error('Ошибка загрузки data.json');
    return response.json();
  })
  .then(data => {
    window.arrColletion = data;
    window.dispatchEvent(new CustomEvent('dataReady'));
  })
  .catch(error => {
    console.error('Не удалось загрузить данные:', error);
  });
