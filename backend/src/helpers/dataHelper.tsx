export function getOffset(currentPage: number = 1, listPerPage: number = 10) {
  return (currentPage - 1) * listPerPage;
}

export function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

const dbHelper = {
  getOffset: getOffset,
  emptyOrRows: emptyOrRows
};

export default dbHelper;
