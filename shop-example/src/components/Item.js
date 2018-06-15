import React from 'react';
import ReactDOM from 'react-dom';

class Item extends React.Component {
    render() {
        const item = this.props.name;
        const price = this.props.price;
        return (
        <div className='tile'>
          <div className='columns'>
            <div className='column'>{item}</div>
            <div className='column'>{price}</div>
          </div>      
        </div>    
        )
    }
}

export default Item;