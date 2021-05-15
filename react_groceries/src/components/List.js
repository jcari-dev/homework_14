import { useRef } from 'react';
import ListJS from './ListJS'

function List(){
    let itemName = useRef()
    
    return (
        <div>
        <ul>
            <li>
                <label for="itemName">Item Name: </label><input ref={itemName} name="itemName" type="text"></input>
                <label for="itemQuantity">Quantity: </label> <input id="itemQuantity" className="quantityInput" name="itemQuantity" type="number"></input>
                </li>
            <li>
                <label for="brands">Brand: </label>
                <input id="itemBrand" name="brands" type="text"></input>
                </li>
            <li>
                <label for="units">Units: </label>
                <input id="itemUnits" name="units" type="text"></input>
                </li>
        </ul>
        <input type="button" value="Add Item" onClick="addItems()"></input>
    </div>
        
    )
}

let addItems = () =>{
    let newItem = {item: ref={itemName} }
    console.log(newItem.item.itemName, newItem.item)
}


export default List;