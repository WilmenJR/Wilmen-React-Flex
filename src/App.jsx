import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBarBootstrap from './components/NavBarBootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
function App() {
  
  console.log('Soy App')
  return (
    <BrowserRouter>
      <NavBarBootstrap/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting='Bienvenidos' />} />
        <Route path='/category/:categoryId' element={ <ItemListContainer greeting='Seleccionaste la categoria:' />} />
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      
      </BrowserRouter>
  )
}

export default App
