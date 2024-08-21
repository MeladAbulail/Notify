const DEFAULT_OPTIONS = {
  text: null,
  position: "top-right",
  autoClose: 5000,
};

export default class Toast {
  #newToast;
  #autoCloseTimeout;
  constructor(options) {
    this.#newToast = document.createElement("div");
    this.#newToast.classList.add("toast");
    this.update({ ...DEFAULT_OPTIONS, ...options });
  }

  //   show() {}

  set text(value) {
    this.#newToast.textContent = value;
  }

  set position(value) {
    const selector = `.toast-container [data-position="${value}"]`;
    const container =
      document.querySelector(selector) || createContainer(value);
    container.append(this.#newToast);
  }

  set autoClose(value) {
    if (value === false) return;
    if (this.#autoCloseTimeout != null) clearTimeout(this.#autoCloseTimeout);

    this.#autoCloseTimeout = setTimeout(() => this.remove(), value);
  }

  update(options) {
    Object.entries(options).forEach(([key, value]) => {
      this[key] = value;
    });
  }
  remove() {
    const container = this.#newToast.parentElement;
    this.#newToast.remove();
    if (container.hasChildNodes()) return;
    container.remove();
  }
}

function createContainer(position) {
  const container = document.createElement("div");
  container.classList.add("toast-container");
  container.dataset.position = position;
  document.body.append(container);
  return container;
}
