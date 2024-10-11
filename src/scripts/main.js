'use strict';

const thead = document.querySelector('thead');

function convertToNumber(currency) {
  const str = currency.slice(1);
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ',') {
      result += '.';
    } else {
      result += str[i];
    }
  }

  return +result;
}

thead.addEventListener('click', (e) => {
  const title = e.target.textContent;
  const index = e.target.cellIndex;

  const tbody = document.querySelector('tbody');
  const rows = [...tbody.rows];

  rows.sort((rowA, rowB) => {
    const valueA = rowA.cells[index].textContent;
    const valueB = rowB.cells[index].textContent;

    switch (title) {
      case 'Name':
      case 'Position':
        return valueA.localeCompare(valueB);

      case 'Age':
        return valueA - valueB;

      case 'Salary':
        return convertToNumber(valueA) - convertToNumber(valueB);
    }
  });

  tbody.append(...rows);
});
