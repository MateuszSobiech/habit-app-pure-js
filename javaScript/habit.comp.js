export class HabitComponent extends HTMLElement {
    constructor(name, checked) {
        super();

        this.name = name;
        this.checked = checked;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const name = this.name;
        const checked = this.checked;

        this.innerHTML = `<div class="form-check form-switch mt-3">
                            <div class="row">
                              <div class="is-checked col-8 offset-1">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="${name}"
                                  ${checked ? 'checked' : ''}
                                />
                                <label class="form-check-label d-block" for="${name}">${name}</label>
                              </div>
                              <button
                                type="button"
                                class="btn-close text-danger col-1"
                                aria-label="Close"
                              ></button>
                            </div>
                          </div>`;
    }
}

window.customElements.define('c-habit', HabitComponent);
