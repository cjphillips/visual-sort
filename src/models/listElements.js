class ListElement {
  constructor(value) {
    this.value = value;
    this.active = false;
  }

  activate = () => {
    this.active = true;
  };

  deactivate = () => {
    this.active = false;
  };
}

class Bridge {
  constructor(values) {
    this.values = values.map(e => new ListElement(e));
  }

  checkoutElement = index => {
    let e = this.values[index];
    e.activate();
  };

  returnElement = index => {
    let e = this.values[index];
    e.deactivate();
  };

  setElementValue = (index, value) => {
    let e = this.values[index];
    if (!e.active) {
      console.warn('List element was set before it was activated');
    }

    e.value = value;
  };

  getRange = () => {
    return this.values.length;
  };

  getElements = () => {
    return this.values;
  };
}

export default ListElement;
