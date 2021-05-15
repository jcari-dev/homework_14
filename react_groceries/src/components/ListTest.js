import React from 'react'
import ListJS from './ListJS'
import { nanoid } from 'nanoid'

const ListTest = () => {
    return (
        <ul>
       
      {ListJS.map((item, index) => (
        <div className="listContainer">
<li key={nanoid()}>Item: {item.item}</li>
<li key={nanoid()}>Brand: {item.brand}</li>
<li key={nanoid()}>Units: {item.units}</li>
<li key={nanoid()}>Quantity: {item.quantity}</li>
<li key={nanoid()}><label for="isPurchased">Purchased?</label>{item.isPurchased ? ' Yes': <input className="purchasedCheck" name="isPurchased" type="checkbox"></input>}</li>

        </div>

        
        
      ))}

      </ul>
    )
}


export default ListTest
