import React from 'react';
import SearchInput from './search_form/SearchInput';
import NotesInput from './input_form/NotesInput';
import { getInitialData } from '../utils';

class NotesApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: getInitialData(), //initialize state
    }
  }

  render(){
    return(
      <div className='main-container flex-row'>
        <div className='flex-item flex-column input-side'>
          <h1>My Notes App</h1>
          <SearchInput />
          <NotesInput />
        </div>
        <div className='flex-item-double flex-column'>
          this is the second row
        </div>
      </div>
    );
  }
}

export default NotesApp;