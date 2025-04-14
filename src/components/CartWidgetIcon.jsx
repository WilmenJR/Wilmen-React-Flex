import { Badge } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetIcons = () => {
    const { cartQuantity } = useContext(CartContext)
    
    return <div>
        <TiShoppingCart color='white' fontSize={'1.5rem'}/>
        <Badge bg="danger">{cartQuantity()}</Badge>
    </div>
}
export default CartWidgetIcons