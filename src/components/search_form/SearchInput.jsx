import React from 'react';

class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keywords: '',
        };
        
        //event binding
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    onSearchEventHandler(event){
        this.setState(() => {
            return {
                keywords: event.target.value,
            }
        });
        this.props.searchNote(event.target.value);
    }

    

    render(){
        return(
            <div className='container flex-item'>
                <form>
                    <input className='search-field' type="text" placeholder='Cari...' value={this.state.keywords} onChange={this.onSearchEventHandler} />
                </form>
            </div>
        );
    }
}

export default SearchInput;