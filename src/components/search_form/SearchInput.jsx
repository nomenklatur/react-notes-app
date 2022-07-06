import React from 'react';

class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searches: '',
        };

        //event binding
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    onSearchEventHandler(event){
        this.setState({searches: event.target.value});
    }

    render(){
        return(
            <div className='container flex-item'>
                <form>
                    <input className='search-field' type="text" placeholder='Cari Notes' value={this.state.searches} onChange={this.onSearchEventHandler} />
                </form>
            </div>
        );
    }
}

export default SearchInput;