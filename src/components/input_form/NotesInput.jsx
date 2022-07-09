import React from 'react';

class NotesInput extends React.Component{
    constructor(props){
        super(props);
        //initialize state
        this.state = {
            title: '',
            body: '',
            charLeft: 50,
        };

        //handler binding
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitFormHandler = this.onSubmitFormHandler.bind(this);
    }

    onTitleChangeHandler(event){
        if(this.state.charLeft > 0){
            this.setState({title: event.target.value});
        }
        this.setState({charLeft: 50 - event.target.value.length});
    }

    onBodyChangeHandler(event){
        this.setState((prevState) => {
            return{
                ...prevState,
                body: event.target.value,
            }
        });
    }

    onSubmitFormHandler(e){
        e.preventDefault();
        this.props.addNote(this.state.title, this.state.body);
        this.setState({title: '', body: ''});
    }

    render(){
        return(
            <div className='container flex-item'>
                <form onSubmit={this.onSubmitFormHandler}>
                    <label htmlFor="title" style={{color: this.state.charLeft <= 0? 'red' : ''}}>Karakter: {this.state.charLeft >= 0? this.state.charLeft : 0}/50</label>
                    <input type="text" placeholder='Judul' name='title' className='title-input' value={this.state.title} onChange={this.onTitleChangeHandler} />
                    <textarea placeholder='Tulis notes ...' className='body-input' value={this.state.body} onChange={this.onBodyChangeHandler}></textarea>
                    <input type="submit" value="Tambah" className='button-28'/>
                </form>
            </div>
        );
    }
}

export default NotesInput;