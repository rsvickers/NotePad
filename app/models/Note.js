import { generateId } from "../utils/GenerateId.js";

/**
  * @param {{title: string; color: string; jot: listedAt?: Date }} data
  */

export class Note {
    constructor(data) {
        this.id = generateId()
        this.title = data.title
        this.jot = data.jot
        this.color = data.color
        this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date()
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date()
    }

    get NoteCardTemplate() {
        return `
<div class="col-6">
<div onClick="app.NotesController.setActiveNote('${this.id}')"
class="row justify-content-evenly flex-column align-items-center p-3">
<div class="fs-5 d-flex">${this.title} <i style="color: ${this.color};" class="align-items-bottom mdi mdi-circle-medium fs-1 mb-0"></i>
<button onclick="app.NotesController.removeNote('${this.id}')" class="btn btn-danger rounded"
type="button">🗑️</button>
</div>


</div>
</div>
`


    }






    get ActiveCardTemplate() {
        return `
<div class="col-6 col-lg-2">
  <button onclick="app.NotesController.goHome()" class="btn btn-secondary rounded" type="button">🔙 Back</button>
</div>
<div class="col-12">
  <p class="fs-4">Title: ${this.title} <i style="color: ${this.color};" class="align-items-bottom mdi mdi-circle-medium fs-3 pt-3 mb-0"></i></p>
</div>
<div class="col-12">
  <p class="fs-5">Created at: ${this.createdAt.toLocaleString()}</p>
</div>
<div class="col-12">
  <p class="fs-5">New update: ${this.updatedAt.toLocaleString()}</p>
</div>
<div class="col-12">
  <textarea onblur="app.NotesController.showNote()" id="noteContents" placeholder="write a note..."
    class="bg-dark text-light w-100 rounded textarea-height fs-5">${this.jot}</textarea>
    <div class="text-end">
      <button onclick="app.NotesController.saveActiveNote()" class="btn btn-success rounded"
        type="button">Save📝</button>
    </div>
</div>

`




    }

    // SECTION reference for active
    //     <div class="col-6 col-lg-2">
    //     <p onclick="app.CasesController.lockCase()" class="fs-2" role="button">🔓 Lock</p>
    // </div>

}