class Sort {
  constructor() {
    if (new.target === Sort) {
      throw new TypeError(`Cannot construct ${new.target} instances directly`);
    }

    if (this.sort === undefined) {
      throw new Error("Must override method 'sort'");
    }

    this.isPaused = false;
  }

  pause = () => {
    this.isPaused = true;
  };
}
