import { sleep, swap } from 'utility';

export const ParitionScheme = Object.freeze({
  LAST: 'Last value',
  FIRST: 'First value',
  RANDOM: 'Random value',
  MEDIAN: 'Median value',
});

export const SortSpeed = {
  SLOW: 0.5,
  NOMRAL: 1.0,
  FAST: 2.0,
};

class QuickSort {
  constructor(updateHandler) {
    this.updateHandler = updateHandler;
  }

  showStep = async () => {
    await this.updateHandler();
    await sleep(20);
  };

  sort = async list => await this._sort(list, 0, list.length - 1);

  _partition = async (list, low, high) => {
    // Get the pivot value. This can be swapped out for a different method (i.e. left-most, median, random, etc)
    let pivot = list[high];
    list[high].activate();
    await this.showStep();
    let li = low - 1;

    for (let j = low; j <= high - 1; j++) {
      list[j].activate();
      await this.showStep();

      if (list[j].value < pivot.value) {
        li++;
        list[li].activate();
        await this.showStep();

        swap(list, li, j);
        await this.showStep();

        list[li].deactivate();
      }

      list[j].deactivate();
      await this.showStep();
    }

    list[li + 1].activate();
    await this.showStep();
    swap(list, li + 1, high);

    list[li + 1].deactivate();
    list[high].deactivate();
    await this.showStep();

    return li + 1;
  };

  _sort = async (list, low, high) => {
    if (low < high) {
      let partitionIndex = await this._partition(list, low, high);
      await this._sort(list, low, partitionIndex - 1);
      await this._sort(list, partitionIndex + 1, high);
    }
  };
}

export default QuickSort;
