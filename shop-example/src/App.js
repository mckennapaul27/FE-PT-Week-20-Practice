import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';


class App extends Component {
  state = {
    filterText: '',
    inStockOnly: false
  }
  handleCheckChange = (inStockOnly) => {
    if(this.state.inStockOnly) {
      this.setState({
        inStockOnly: false
      })
    } else {
      this.setState({
        inStockOnly: true
      })
    }
  }
  handleTextChange = (filterText) => {
    this.setState({
      filterText: filterText
    });
  }
  render() {
    return (
      <div>
        <section className="section is-medium">
          <SearchBar 
          filterText={this.state.filterText} 
          handleTextChange={this.handleTextChange} 
          inStockOnly={this.state.inStockOnly} 
          handleCheckChange={this.handleCheckChange} 
          />  
          <ProductTable 
          filterText={this.state.filterText} 
          inStockOnly={this.state.inStockOnly}
          filterText={this.state.filterText}
          />               
        </section >  
      </div>
      
    );
  }
}

export default App;
