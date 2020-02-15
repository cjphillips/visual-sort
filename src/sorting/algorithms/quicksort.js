export const ParitionScheme = {
  LAST: 'Last value',
  FIRST: 'First value',
  RANDOM: 'Random value',
  MEDIAN: 'Median value',
};

export const SortSpeed = {
  SLOW: 0.5,
  NOMRAL: 1.0,
  FAST: 2.0,
};

/*
class QuickSort {
  constructor(paritionScheme, sortSpeed) {
    this.sortSpeed = sortSpeed;
    this.
  }

  _sort = (list, low, high) => {};

  sort = list => {
    this._sort(list, 0, list.length);
  };
}

let qs = new QuickSort();
qs._sort();
*/

const _swap = (list, ia, ib) => {
  let tmp = list[ib];
  list[ib] = list[ia];
  list[ia] = tmp;
};

const _partition = (list, low, high) => {
  // Get the pivot value. This can be swapped out for a different method (i.e. left-most, median, random, etc)
  let pivot = list[high];
  let li = low - 1;

  console.log(
    `list=${list}, low=${low}, high=${high}, pivot=${pivot}, li=${li}`,
  );

  for (let j = low; j <= high - 1; j++) {
    if (list[j] < pivot) {
      li++;
      _swap(list, li, j);
    }
  }
  _swap(list, li + 1, high);
  return li + 1;
};

const _quicksort = (list, low, high) => {
  if (low < high) {
    let partition_index = _partition(list, low, high);
    _quicksort(list, low, partition_index - 1);
    _quicksort(list, partition_index + 1, high);
  }
};

const quickSort = () => {
  let list = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  _quicksort(list, 0, list.length - 1);
  return list.toString();
};

export default quickSort;
