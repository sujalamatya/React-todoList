import React, {useState} from 'react'

export default function MyComponent() {
  const [name,setName]=useState("guest");
  const [quantity,setQuantity]=useState(1);
  const [comment,setcomment]=useState("");
  const [payment,setPayment]=useState("");
  const [shipping,setShipping]=useState("Delivery");
  function handleNameChange(e){
    setName(e.target.value);
  }
  function handleQuantityChange(e){
    setQuantity(e.target.value);
  }
  function handleCommentChange(e){
    setcomment(e.target.value);
  }
  function handlePaymentChange(e){
    setPayment(e.target.value);
  }
  function handleShippingChange(e){
    setShipping(e.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <input value={quantity} onChange={handleQuantityChange} type='number' />
      <p>Quantity:{quantity}</p>
      <textarea value={comment} onChange={handleCommentChange} placeholder='ring the doorbell after the delivery is complete' />
      <p>Comment: {comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">select an option</option>
        <option value="credit card">credit card</option>
        <option value="cash on delivery">cash on delivery</option>
        <option value="master card">master card</option>
        <option value="gift card">gift card</option>
      </select>
      <p>Payment:{payment}</p>
      <label><input type="radio" value="Pick up" name="delivery" checked={shipping==="Pick up"} onChange={handleShippingChange} /> Pick up</label><br/>
      <label><input type="radio" value="Delivery" name="delivery" checked={shipping==="Delivery"} onChange={handleShippingChange} /> Delivery</label>
      <p>Shipping: {shipping}</p>
    </div>
  )
}

