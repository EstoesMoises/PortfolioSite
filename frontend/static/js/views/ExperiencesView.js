import ExperienceCard from "../components/ExperienceCard.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Experiences");
    }

    async getHtml() {
        // Fetch experiences from the API
        const experiences = await this.fetchExperiences();

        const experienceElements = experiences.map(experience => {
            const singleExperience = new ExperienceCard(experience);
            return singleExperience.getHtml();
        })

         // Join all the SingleExperience elements into a single string
         const experiencesHtml = experienceElements.join('');

        return /*html*/ `
        <h1>Welcome to the Experiences list</h1>
        ${experiencesHtml}
    `;
    }

    async fetchExperiences() {
        const apiUrl = 'http://localhost:1337/api/noticias';
    
        try {
            const response = await fetch(apiUrl);
            const responseData = await response.json();
    
            // Assuming the array of experiences is under a key like "experiences"
            const experiences = responseData.data || [];
            console.log(experiences)
    
            return experiences;
        } catch (error) {
            console.error('Error fetching experiences:', error);
            return [];
        }
    }    
}
