import React from 'react';
import SearchInput from './search_form/SearchInput';
import NotesInput from './input_form/NotesInput';
import NotesList from './notes_list/NotesList';
import { getInitialData } from '../utils';

class NotesApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: getInitialData(), //initialize state
    }

    //binding handler
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
  }

  deleteNoteHandler(id){
    const newNotes = this.state.notes.filter(note => note.id !== id);
    this.setState({notes: newNotes});
  }

  render(){
    return(
      <div className='main-container flex-row'>
        <div className='flex-item flex-column'>
          <h1>My Notes App</h1>
          <SearchInput />
          <NotesInput />
        </div>
          <NotesList notes={this.state.notes} deleteNote={this.deleteNoteHandler}/>
      </div>
    );
  }
}

export default NotesApp;