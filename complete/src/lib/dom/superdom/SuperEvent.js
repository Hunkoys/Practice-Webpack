class SuperEvent {
  constructor(element) {
    this.e = element;

    this._startListeners();
  }

  _startListeners() {
    this._keyBinds = {};
    this.e.addEventListener('keydown', (e) => {
      if (this._keyBinds[e.key]) {
        this._keyBinds[e.key](e);
      }
    });
  }

  onClick(task) {
    this.e.addEventListener('click', task);

    return this;
  }

  onKey(key, task) {
    if (typeof key === 'string') this._setKeyBind(key, task);
    else if (typeof key === 'object') this._setKeyBindMap(key);

    return this;
  }

  _setKeyBind(key, task) {
    this._keyBinds[key] = task;
  }

  _setKeyBindMap(map) {
    for (const key in map) {
      this._setKeyBind(key, map[key]);
    }
  }
}

export default SuperEvent;
