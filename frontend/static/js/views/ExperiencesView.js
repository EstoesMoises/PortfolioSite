import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor (params) {
        super(params);
        this.setTitle("Experiences")
    }

    async getHtml() { 
        return /*html*/ `
        <h1>Welcome to the Experiences list</h1>
        <p>There are going to be a list of experiences here later that will be retrieves from the API lol</p>
        ` 
        ;
    }
}