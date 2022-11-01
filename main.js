import Storage from './javaScript/Storage.js';
import { setAddEvents } from './javaScript/add.js';
import { setRemoveEvent } from './javaScript/remove.js';
import { renderTasks } from './javaScript/render.js';
import { setResetEvent, resetAll } from './javaScript/reset.js';

class AppComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.getHTML();

        setAddEvents();
        setRemoveEvent();
        setResetEvent();
        renderTasks();

        document.querySelector('#input').focus();

        // check date
        const localDay = Storage.getDate();
        const dayNow = new Date().getDate();

        if (dayNow !== localDay) {
            resetAll();
            Storage.setData('currentDay', dayNow);
        }
    }

    getHTML() {
        return `<div class="reset position-absolute top-0 start-0 mt-3 ms-md-5 ms-3">
                    <img src="./img/redo-solid.svg" alt="" />
                </div>

                <div class="question position-absolute top-0 end-0 mt-3 me-md-5 me-3">
                    <a href="question.html"><img src="./img/question-solid.svg" alt="" /></a>
                </div>

                <h1 class="text-center py-3">Habit App</h1>

                <div class="container d-flex justify-content-center mt-3">
                    <div class="border border-info px-3 py-4 rounded-3">
                        <div class="d-flex justify-content-center">
                            <input id="input" class="ms-2 px-1" type="text" placeholder="Your resolve" />
                            <button class="btn btn-primary mx-2">Add Habit</button>
                        </div>

                        <div class="spinner d-flex justify-content-center mt-5 d-none">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>

                        <div class="habits"></div>
                    </div>
                </div>`;
    }
}

customElements.define('c-app', AppComponent);
