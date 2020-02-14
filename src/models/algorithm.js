export const ALGORITHMS = Object.freeze({
  BUBBLE: 'Bubble Sort',
  HEAP: 'Heap Sort',
  MERGE: 'Merge Sort',
  QUICK: 'Quick Sort',
});

export const SORT_ORDER = Object.freeze({
  RANDOM: 'Default (random)',
  WORST: 'Worst Case',
  BEST: 'Best Case',
});

export const sort = (list, algorithm) => {
  switch (algorithm) {
    case ALGORITHMS.BUBBLE:
      bubbleSort(list);
      break;
    case ALGORITHMS.HEAP:
      heapSort(list);
      break;
    case ALGORITHMS.MERGE:
      mergeSort(list);
      break;
    case ALGORITHMS.QUICK:
      quickSort(list);
      break;
    default:
      throw Error(`Unknown algoithm: ${algorithm}`);
  }
};

const quickSort = list => {
  /* do quick sort */
};

const mergeSort = list => {
  /* do merge sort */
};

const heapSort = list => {
  /* do heap sort */
};

const bubbleSort = list => {
  /* do bubble sort */
};
