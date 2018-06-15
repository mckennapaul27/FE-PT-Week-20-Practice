import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
    
    handleFilterTextChange = (e) => {
        this.props.handleTextChange(e.target.value)
    }
    
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        
        return (
        <div className='tile'>
            <div className="field">
                <div className="control">
                <input className="input" type="text" placeholder="Search" value={filterText} onChange={this.handleFilterTextChange}></input>

                <input type="checkbox" id="items" checked={inStockOnly} onChange={this.props.handleCheckChange}></input> 
                <label> Only show products in stock</label>
                </div>
            </div>           
        </div>    
        )
    }
}

export default SearchBar;