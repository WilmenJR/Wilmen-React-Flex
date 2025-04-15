import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBarBootstrap from './components/NavBarBootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'
function App() {
  
  console.log('Soy App')
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBarBootstrap/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting='Bienvenido a TecnoMovilX 📱' />} />
        <Route path='/category/:categoryId' element={ <ItemListContainer greeting='Seleccionaste la categoria:' />} />
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </CartProvider>
      </BrowserRouter>
  )
}

export default App
