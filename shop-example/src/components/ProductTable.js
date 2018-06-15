import React from 'react';
import ReactDOM from 'react-dom';
import Category from './Category';

class ProductTable extends React.Component {
    render() {       
       
        const categories = ITEMS.reduce((acc, item) => {
            if(acc.indexOf(item.category) === -1) acc.push(item.category)
            return acc;
        },[])
        const inStock = this.props.inStockOnly;
        const filterText = this.props.filterText;
        
        return (
        <div className='tile'>
            <div className='rows'>
                <div className='columns has-text-centered is-marginless'>
                <div className='column'><strong>Name</strong></div>
                <div className='column'><strong>Price</strong></div>
                </div>
                {categories.map(category => {
                    return <Category category={category} inStock={inStock} filterText={filterText} items={ITEMS.filter(item => item.category === category)} className='column' />        
                })}      
            </div>
        </div>    
        )
    }
}

const ITEMS = [
    {"category": "Sporting Goods", "price": "$49.99", "stocked": true, "name": "Football"},
    {"category": "Sporting Goods", "price": "$9.99", "stocked": true, "name": "Baseball"},
    {"category": "Sporting Goods", "price": "$29.99", "stocked": false, "name": "Basketball"},
    {"category": "Electronics", "price": "$99.99", "stocked": true, "name": "iPod Touch"},
    {"category": "Electronics", "price": "$399.99", "stocked": false, "name": "iPhone 5"},
    {"category": "Stationary", "price": "$199.99", "stocked": true, "name": "Nexus 7"},
    {"category": "Indoors", "price": "$199.99", "stocked": true, "name": "Nexus 7"},
    {"category": "Indoors", "price": "$29.99", "stocked": false, "name": "Basketball"}
]

export default ProductTable;