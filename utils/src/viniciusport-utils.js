// Utils is the place where you can export functions to all micro frontends. It's like a global container for methods

export function emitEvent(name, data) {
  dispatchEvent(
    new CustomEvent(name, {
      detail: data,
    })
  );
}

export function listenEvent(name, cb) {
  window.addEventListener(name, cb);
}
