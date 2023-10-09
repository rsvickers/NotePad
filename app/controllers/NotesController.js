import { AppState } from "../AppState.js"
import { notesService } from "../services/NotesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawNotes() {
    const notes = AppState.notes
    let content = ""
    notes.forEach(note => content += note.NoteCardTemplate)
    // console.log('[NOTES CONTROLLER], _drawNotes, content', content)
    setHTML('notesCount', `Notes: ${notes.length}`)
    setHTML('notes', content)
    setHTML('note', "")

}

function _drawActiveNote() {
    const activeNote = AppState.activeNote
    setHTML('notesCount', "")
    setHTML('note', activeNote.ActiveCardTemplate)
}



export class NotesController {
    constructor() {
        // Pop.success('whats good homie')
        // _drawNotes()
        AppState.on('notes', _drawNotes)
        AppState.on('activeNote', _drawActiveNote)
    }


    goHome() {
        _drawNotes()

    }


    test() {
        Pop.success('test is good')
    }

    setActiveNote(noteId) {
        notesService.setActiveNote(noteId)
    }


    saveActiveNote() {
        let noteContents = document.getElementById('noteContents').value

        notesService.saveActiveNote(noteContents)
        Pop.success('Note saved!')

    }


    showNote() {
        const jotElem = document.getElementById('noteContents')
        // jotElem.focus()

        jotElem.setSelectionRange(jotElem.value.length, jotElem.value.length)
    }


    createNote(event) {
        try {
            event.preventDefault()
            const form = event.target
            const eventData = getFormData(form)
            // console.log('NOTES CONTROLLER, createNOte, eventData', eventData)

            notesService.createNote(eventData)
            Pop.success('NOTE WAS CREATED!')
            form.reset()
            // bootstrap.Offcanvas.getOrCreateInstance("#createCaseOffcanvas").hide()


        } catch (error) {
            Pop.error(error.message)
            console.error(error)

        }

    }

    async removeNote(noteId) {
        const wantsToDelete = await Pop.confirm('Are you sure about that??')

        if (!wantsToDelete) {
            return
        }
        notesService.removeNote(noteId)
    }


}