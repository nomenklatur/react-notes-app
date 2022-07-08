import React from 'react';
import NotesItem from './NotesItem';
import ArchiveItem from './ArchiveItem';

function NotesList({ notes }){
    return(
        <div className="flex-item-double flex-column">
            <div className='notes-list flex-row'>
                {
                    notes.map((note) => {
                        if(!note.archived){
                            return <NotesItem key={note.id} {...note} />
                        }else{
                            return null;
                        }
                    })
                }
            </div>
            <div className='notes-list flex-row'>
                {
                   notes.map((note) => {
                    if(note.archived){
                        return <ArchiveItem key={note.id} {...note} />
                    }else{
                        return null;
                    }
                }) 
                }
            </div>
        </div>
    );
}

export default NotesList;