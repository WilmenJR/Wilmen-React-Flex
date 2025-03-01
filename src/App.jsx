import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBarBootstrap from './components/NavBarBootstrap'
import NavbarComponent from './components/Navbarcomponent'

function App() {
  
  console.log('Soy App')
  return (
    <>
      <NavBarBootstrap/>
      <ItemListContainer greeting='Bienvenidos'/>
    </>
  )
}

export default App
