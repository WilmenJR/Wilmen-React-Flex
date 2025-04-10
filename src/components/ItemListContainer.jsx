import { useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncData'
import ItemList from './ItemList'
const ItemListContainer = ({greeting}) => {
    const [data, setData]= useState([])
    const [loading, setLoading] = useState(false)
    //return (
        //<div>
            //<h1>{greeting}</h1>
            //<button variant= 'dark'>Hola</button>
        //</div>
    //)
//}

// Promesa de productos{

useEffect(()=>{
    getProducts()
    .then((res)=> setData(res))
    .catch((error)=> console.log(error))
},[])


    return(
        <main>
            <h1 className='text-succes'>{greeting}</h1>
            { /*{data.map((item)=> <p key={item.id}>{item.name}</p>)} */}
            <ItemList data={data}/>
        </main>
    )
}

export default ItemListContainer