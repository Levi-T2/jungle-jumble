import { AboutController } from "./controllers/AboutController.js";
import { GamesController } from "./controllers/GamesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { JungleController } from "./controllers/JungleController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { JungleView } from "./views/JungleView.js";


export const router = [
  {
    path: '',
    controller: [JungleController, GamesController],
    view: JungleView

  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]