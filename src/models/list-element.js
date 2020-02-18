import ValueStateMap from 'views/value-state';

class ListElement {
  constructor(value) {
    this.value = value;
    this.state = ValueStateMap.Inactive;
  }

  get isActive() {
    return this.state !== ValueStateMap.Inactive;
  }

  activate = state => (this.state = state || ValueStateMap.ActiveDefault);
  deactivate = () => (this.state = ValueStateMap.Inactive);
}

export default ListElement;
