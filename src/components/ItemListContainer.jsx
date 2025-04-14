import { useEffect, useState } from 'react'
import { getProducts, productos } from '../mock/asyncData'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, getDocs, where, query, addDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemListContainer = ({greeting}) => {
    const [data, setData]= useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()



    useEffect(()=> {
        setLoading(true)
        const productCollection = categoryId
        ? query(collection(db, "Celulares"), where("category", "==", categoryId))
        : collection(db, "Celulares")
        getDocs(productCollection)
        .then((res)=> {
            //console.log(res.docs)
            const list = res.docs.map((doc)=>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            })
            //console.log(list)
            setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId])

// Promesa de productos{

//useEffect(()=>{
    //setLoading(true)
    //getProducts()
    //.then((res)=>{
        //if(categoryId){
            //setData(res.filter((item)=> item.category === categoryId))
        //}else{
            //setData(res)
        //}
    //})
    //.catch((error)=> console.log(error))
    //.finally(()=> setLoading(false))
//},[categoryId])





    return(
        <main>
            <h1 className='text-succes'>{greeting}{categoryId && <span style={{textTransform:'capitalize'}}>{categoryId}</span>}</h1>
            { /*{data.map((item)=> <p key={item.id}>{item.name}</p>)} */}
            {loading ? <LoaderComponent/> : <ItemList data={data}/>}
        </main>
    )
}

export default ItemListContainer