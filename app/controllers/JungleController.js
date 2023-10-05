import { AppState } from "../AppState.js"
import { jungleService } from "../services/JungleService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"


function _drawJumbles() {
    const jumbles = AppState.jumbles
    let content = ''
    jumbles.forEach(jumble => content += jumble.jumbleCard)
    setHTML('ourJumbles', content)
}

function _drawActiveJumble() {
    const activeJumble = AppState.activeJumble

    setHTML('currentJumble', activeJumble.jumbleActiveCard)
}

export class JungleController {
    constructor() {
        console.log('Jungle controller is working!')
        _drawJumbles()
        AppState.on('jumbles', _drawJumbles)
        AppState.on('activeJumble', _drawActiveJumble)

    }

    setActiveJumble(jumbleName) {
        jungleService.setActiveJumble(jumbleName)
        console.log('the button was clicked in the controller')
    }
    createJumble(event) {
        event.preventDefault()
        const form = event.target
        const jumbleData = getFormData(form)
        console.log('creating jumble', jumbleData)
        jungleService.createJumble(jumbleData)
    }
}