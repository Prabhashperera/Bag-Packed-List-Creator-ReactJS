import React, {useState } from 'react'

function Form() {

    const [itemName, setItemName] = useState("");
    const [itemCount, setItemCount] = useState(0);

    function setFormValues() {
        console.log(itemName + itemCount)
    }

  return (
    <>
    <section>
        <input onChange={(e) => setItemName(e.target.value)} value={itemName} type="text" placeholder='item Name' />
        <input onChange={(e) => setItemCount(e.target.value)} value={itemCount} type="number" placeholder='count' />
        <button onClick={() => setFormValues()}>Add Item</button>
    </section>
    </>
  )
}

export default Form