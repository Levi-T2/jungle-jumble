import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jungle.js"
import { saveState } from "../utils/Store.js"

function _saveJumbles() {
    saveState('jumbles', AppState.jumbles)
}

class JungleService {

    setActiveJumble(jumbleName) {

        const activeJumble = AppState.jumbles.find(jumble => jumble.id == jumbleName)

        console.log('the button was clicked in the service', jumbleName)

        AppState.activeJumble = activeJumble

        console.log('this is our current active jumble', AppState.activeJumble)

    }
    createJumble(jumbleData) {
        const newJumble = new Jumble(jumbleData)
        console.log('new jumble!', newJumble);
        AppState.jumbles.push(newJumble)
        _saveJumbles()
        AppState.emit('jumbles')
    }



}

export const jungleService = new JungleService()