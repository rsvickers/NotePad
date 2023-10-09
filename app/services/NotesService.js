import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { saveState } from "../utils/Store.js"

function _save() {
    saveState('notes', AppState.notes)
}


class NotesService {

    setActiveNote(noteId) {
        const activeNote = AppState.notes.find(note => note.id == noteId)
        AppState.activeNote = activeNote
        // console.log('NOTES SERVICE setActiveNote, activeNote', activeNote)
    }

    saveActiveNote(noteContents) {
        let activeNote = AppState.activeNote
        activeNote.jot = noteContents
        // console.log(activeCase)

        _save()
    }



    createNote(noteData) {
        const newNote = new Note(noteData)
        // console.log('NOTE SERVICE, createNote, newNote', newNote)
        AppState.notes.push(newNote)
        AppState.emit('notes')
        _save()
    }

    showNote() {
        let activeNote = AppState.activeNote
        activeNote.jot
        AppState.emit('activeNote')
    }

    removeNote(noteId) {
        const notes = AppState.notes
        const noteIndex = notes.findIndex(note => note.id == noteId)

        if (noteIndex == -1) {
            throw new Error(`Could not find a note index with this ID: ${noteId}`)
        }
        notes.splice(noteIndex, 1)
        _save()

        AppState.emit('notes')
    }



}



export const notesService = new NotesService