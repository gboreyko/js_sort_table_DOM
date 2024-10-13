'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

function convertToNumber(currency) {
  return Number(currency.split(',').join('.').slice(1));
}

thead.addEventListener('click', (e) => {
  const title = e.target.textContent;
  const index = e.target.cellIndex;

  const rows = [...tbody.rows];
  const enlargedRows = rows.map((row) => [row.cells[index].textContent, row]);

  enlargedRows.sort((row1, row2) => {
    switch (title) {
      case 'Name':
      case 'Position':
        return row1[0].localeCompare(row2[0]);

      case 'Age':
        return row1[0] - row2[0];

      case 'Salary':
        return convertToNumber(row1[0]) - convertToNumber(row2[0]);
    }
  });

  const sortRows = enlargedRows.map((item) => item[1]);

  tbody.append(...sortRows);
});
