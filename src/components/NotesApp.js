import React from 'react';
import SearchInput from './search_form/SearchInput';
import NotesInput from './input_form/NotesInput';
import NotesList from './notes_list/NotesList';
import { getInitialData } from '../utils';

class NotesApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //initialize state
      notes: getInitialData(),
      searchedNotes: [],
      notSearching: true,
    }

    //binding handler
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.changeNoteHandler = this.changeNoteHandler.bind(this);
    this.searchNotesHandler = this.searchNotesHandler.bind(this);
    this.addNotesHandler = this.addNotesHandler.bind(this);
  }

  deleteNoteHandler(id){
    const newNotes = this.state.notes.filter(note => note.id !== id);
    this.setState({notes: newNotes});
  }

  changeNoteHandler(id){
    const oldNotes = this.state.notes;
    const index = oldNotes.findIndex(note => note.id === id);
    if (oldNotes[index].archived){
        oldNotes[index].archived = false;
    }
    else{
        oldNotes[index].archived = true;
    }

    this.setState({oldNotes});
  }

  searchNotesHandler(keyword){
    if (keyword === ''){
      this.setState({searchedNotes: [], notSearching: true});
    }
    else{
      const tempNotes = [];
      for (const note of this.state.notes){
        const searchedTitle = note.title.search(keyword);
        if (searchedTitle !== -1){
          tempNotes.push(note);
        }
      }
      this.setState({searchedNotes: tempNotes, notSearching: false});
    }
  }

  addNotesHandler(title, body){
    const newItem = [
      ...this.state.notes,
      {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date(),
      }
    ]

    this.setState({notes: newItem});
  }

  render(){
    return(
      <div className='main-container flex-row'>
        <div className='flex-item flex-column'>
          <h1>My Notes App</h1>
          <SearchInput searchNote={this.searchNotesHandler}/>
          <NotesInput addNote={this.addNotesHandler}/>
        </div>
          <NotesList notes={this.state.notSearching? this.state.notes : this.state.searchedNotes} deleteNote={this.deleteNoteHandler} changeNote={this.changeNoteHandler}/>
      </div>
    );
  }
}

export default NotesApp;