import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor (params) {
        super(params);
        this.setTitle("Not Found")
    }

    async getHtml() { 
        return /*html*/ `
        <h1>Not Found</h1>
        <a href="/" data-link>Volver al inicio</a>
        ` ;
    }
}