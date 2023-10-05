import { AppState } from "../AppState.js"
import { getFormData } from "../utils/FormHandler.js"


export class GamesController {
    constructor() {
        console.log('Games controller is working')

    }

    checkText() {
        // debugger
        event.preventDefault()
        const form = event.target
        const text = getFormData(form)
        console.log(text)
        const jumbleText = AppState.activeJumble.body
        console.log(jumbleText)
        if (text.textInput == jumbleText) {

            window.alert('you got it right!')
            return
        } else {
            window.alert('you got it wrong!')
        }

    }
}

