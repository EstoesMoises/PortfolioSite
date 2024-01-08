export default class ExperienceCard {
  constructor(experience) {
    this.experience = experience;
  }

  getHtml() {
    return /*html*/ `
            <style>
                .single-experience {
                    border: 1px solid #ccc;
                    margin-bottom: 10px;
                    padding: 10px;
                }

                h2 {
                    color: #333;
                }

                p {
                    color: #666;
                }
            </style>

            <div class="single-experience">
                <h2>${this.experience.attributes.titulo}</h2>
                <p>${this.experience.attributes.contenido}</p>
                <!-- Add other details as needed -->
            </div>
        `;
  }
}
