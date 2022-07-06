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
    }

    onTitleChangeHandler(event){
        if(event.target.value.length <= 50 ){
            this.setState({
                title: event.target.value,
                charLeft: 50 - event.target.value.length,
            });
        }
    }

    onBodyChangeHandler(event){
        this.setState((prevState) => {
            return{
                ...prevState,
                body: event.target.value,
            }
        });
    }

    render(){
        return(
            <div className='container flex-item'>
                <form>
                    <label htmlFor="title" style={{color: this.state.charLeft === 0? 'red' : ''}}>Karakter: {this.state.charLeft}/50</label>
                    <input type="text" placeholder='Judul' name='title' className='title-input' value={this.state.title} onChange={this.onTitleChangeHandler} />
                    <textarea placeholder='Tulis notes ...' className='body-input' value={this.state.body} onChange={this.onBodyChangeHandler}></textarea>
                    <input type="submit" value="Tambah" className='button-28'/>
                </form>
            </div>
        );
    }
}

export default NotesInput;