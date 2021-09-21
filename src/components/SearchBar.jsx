import React from 'react'


class SearchBar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
          
            
            <div >
                <form onSubmit={this.handleSubmit} >
                    <div >
                        <label >Video Search</label>
                        <input onChange={this.handleChange}  type="text" placeholder="Search.."/>
                    </div>
                </form>
            </div>
          
        )
    }
}

export default SearchBar;

