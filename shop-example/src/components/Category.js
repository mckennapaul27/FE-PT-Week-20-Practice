import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';

class Category extends React.Component {
    render() {
        const category = this.props.category;
        const items = this.props.items;
        console.log(this.props.filterText)
        return (
        <div className={this.props.className}>
            <h5><strong>{category}</strong></h5>
            {   items.filter(item => item.name.includes(this.props.filterText))
                .map((item, i) => {
                if(this.props.inStock) {
                    if(item.stocked) {
                        return <Item name={item.name} price={item.price} key={i}/>
                    }
                } else {
                    return <Item name={item.name} price={item.price} key={i}/>
                }
                
            })
            }
        </div>    
        )
    }
}

export default Category;