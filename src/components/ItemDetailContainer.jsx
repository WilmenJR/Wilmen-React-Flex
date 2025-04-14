import React, { useEffect, useState } from 'react'
import { getProducts} from '../mock/asyncData'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { db } from '../service/firebase'
import { collection, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const [invalid, setInvalid] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    setLoading(true)
    const productCollection = collection(db, "Celulares")
    const docRef= doc(productCollection, id)
    getDoc(docRef)
    .then((res)=> {
      if(res.data()){
        setProduct({id: res.id, ...res.data()})
      }else{
        setInvalid(true)
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[])

  //useEffect(() =>{
    //setLoading(true)
    //getProducts()
    //.then((res)=> setProduct(res.find((item)=> item.id === id)))
    //.catch((error)=> console.log(error))
    //.finally(()=> setLoading(false))
  //},[])

  if(invalid){
    return<div>
      <h2>Producto no existe!</h2>
    </div>
  }




  return (
    <div>
      {loading ? <LoaderComponent/> : <ItemDetail product={product}/>}
    </div>
  )
}

export default ItemDetailContainer
