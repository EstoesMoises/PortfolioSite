import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor (params) {
        super(params);
        this.setTitle("Home")
    }

    async getHtml() { 
        return /*html*/ `
        <h1>Welcome to the webpage</h1>
        <p>Welcome to the webpageWelcome to the webpageWelcome to the webpageWelcome to the webpageWelcome to the webpageWelcome to the webpageWelcome to the webpageWelcome to the webpageWelcome to the webpageWelcome to the webpageWelcome to the webpageWelcome to the webpageWelcome to theasd</p>
        ` ;
    }
}