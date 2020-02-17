const INACTIVE_COLOR = '#6699ff';
const ACTIVE_DEFAULT = '#339966';

class ListElement {
  constructor(value) {
    this.value = value;
    this.active = false;
    this.color = INACTIVE_COLOR;
  }

  activate = type => {
    if (type === undefined) {
      type = ACTIVE_DEFAULT;
    }

    this.active = true;
    this.color = type;
  };

  deactivate = () => {
    this.active = false;
    this.color = INACTIVE_COLOR;
  };
}

export default ListElement;
