import React from 'react';
import NotesItem from './NotesItem';

function NotesList({ notes }){
    return(
        <div className='notes-list flex-row'>
            <h4>My Notes</h4>
            {
                notes.map((note) => (
                    <NotesItem key={note.id} {...note} />
                ))
            }
        </div>
    );
}

export default NotesList;