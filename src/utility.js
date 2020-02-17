import { Algorithms, SortOrder } from 'sorting/definitions';
import QuickSort from 'sorting/algorithms/quicksort';
import ListElement from 'models/list-element';

export const MAX_ELEMENT_VALUE = 100;
export const MIN_ELEMENT_VALUE = 1;

export const getRandomInt = (min, max) => {
  /*
  Get a random integer between min (inclusive) and max (exclusive).
  */
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const swap = (list, ia, ib) => {
  let tmp = list[ib];
  list[ib] = list[ia];
  list[ia] = tmp;
};

export const getNewCollection = (range, order) => {
  let elements = [];

  let i = 0;
  while (i < range) {
    elements.push(getRandomInt(MIN_ELEMENT_VALUE, MAX_ELEMENT_VALUE));
    i++;
  }

  switch (order) {
    case SortOrder.RANDOM:
      break;
    case SortOrder.SORTED:
      elements.sort((a, b) => a - b);
      break;
    case SortOrder.REVERSED:
      elements.sort((a, b) => a - b).reverse();
      break;
    default:
      throw new Error(`Unrecognized sort order: ${order}`);
  }

  return elements.map(e => new ListElement(e));
};

export const getNewSorter = (algorithm, updateHandler) => {
  switch (algorithm) {
    case Algorithms.BUBBLE:
      throw new Error(`${algorithm} not yet implemented`);
    case Algorithms.HEAP:
      throw new Error(`${algorithm} not yet implemented`);
    case Algorithms.MERGE:
      throw new Error(`${algorithm} not yet implemented`);
    case Algorithms.QUICK_SORT:
      return new QuickSort(updateHandler);
    default:
      throw Error(`Unknown algoithm: ${algorithm}`);
  }
};
