import Button  from 'react-bootstrap/button'
const ItemListContainer = ({greeting}) => {
    //const {greeting}= props
    //console.log(props)
    return (
        <div>
            <h1>{greeting}</h1>
            <button variant= 'dark'>Hola</button>
        </div>
    )
}

export default ItemListContainer