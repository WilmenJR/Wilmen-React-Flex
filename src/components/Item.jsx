import React from 'react';
import ItemList from './ItemList';
const Item = (props) => {
    console.log(props)
    return (
        <div className='card' style={{width:'10rem', marginTop:15}}>
            <img className='card-img-top'/>
            <div className='card-body'>
                <h5 className='card-title'>Nombre</h5>
                <p className='card-text'>precio</p>
                <a className='btn btn-dark'>Ver mas</a>
            </div>
        </div>
    );
}

export default Item