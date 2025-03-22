import React from 'react';
import Item from './Item';

const ItemList = ({data}) => {
    return (
        <div>
            {data.map((item)=> <Item key={item.id}/>)}
        </div>
    );
}

export default ItemList 