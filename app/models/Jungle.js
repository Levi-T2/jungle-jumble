import { generateId } from "../utils/GenerateId.js"


export class Jumble {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.body = data.body
        // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
        this.fastestTime = null
        this.startTime = null
        this.endTime = null
    }

    // get ListTemplate() {
    //     return `<li>${this.name}</li>`
    // }

    get jumbleCard() {
        return `
        <div>
        <p>
        <button class="btn btn-danger rounded-pill" onclick="app.JungleController.setActiveJumble('${this.id}')">Choose</button>
        <span>${this.name}</span>
        </p>
        </div>
        `
    }

    get jumbleActiveCard() {
        return `
        <p>${this.body}</p>
        `
    }
}