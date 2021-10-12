export function habitComponent(name) {
  return `<div class="form-check form-switch mt-3">
    <div class="row">
      <div class="col-8 offset-1">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="${name}"
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
