import QuickSort from 'sorting/algorithms/quicksort';

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

export const getSortingAlgorithm = algorithm => {
  switch (algorithm) {
    case ALGORITHMS.BUBBLE:
      throw new Error(`${algorithm} not yet implemented`);
    case ALGORITHMS.HEAP:
      throw new Error(`${algorithm} not yet implemented`);
    case ALGORITHMS.MERGE:
      throw new Error(`${algorithm} not yet implemented`);
    case ALGORITHMS.QUICK:
      return new QuickSort();
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
