import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { NotesController } from "./controllers/NotesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: NotesController,
    // view: null
    view:  /*html*/`
      <div class="container-fluid">
      <section class="row justify-content-between">
        <div class="col-12 p-4">
          <h1 class="funFont">El Notey Pad📝</h1>
        </div>
      </section>

      <section class="row justify-content-center mb-3">
      <div class="col-8 p-2" id="note">
      </div>
      </section>
    </div>

    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]