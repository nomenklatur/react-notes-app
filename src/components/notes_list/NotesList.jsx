import React from 'react';
import NotesItem from './NotesItem';
import ArchiveItem from './ArchiveItem';

function NotesList({ notes, deleteNote }){
    const activeNotes = notes.filter(note => note.archived === false);
    const archivedNotes = notes.filter(note => note.archived === true);

    const checkNotes = (activeNotes) => {
        if(activeNotes.length>0){
            return(
                    activeNotes.map((note) => (
                        <NotesItem key={note.id} {...note} deleteNote={deleteNote} id={note.id} />
                    ))
            );
        }else{
            return <div className='empty-list'>Tidak ada Catatan</div>
        }
    }

    const checkArchive = (archivedNotes) => {
        if(archivedNotes.length>0){
            return(
                    archivedNotes.map((note) => (
                        <ArchiveItem key={note.id} {...note} deleteNote={deleteNote} id={note.id} />
                    ))
            );
        }else{
            return <div className='empty-list-archive'>Tidak ada arsip</div>
        }
    }

    return(
        <div className="flex-item-double flex-column">
            <div className='notes-list flex-row'>
                { checkNotes(activeNotes) }
            </div>
            <div className='notes-list flex-row'>
                { checkArchive(archivedNotes) }
            </div>
        </div>
    );
}

export default NotesList;