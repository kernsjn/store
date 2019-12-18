import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Items = () => {
  const apiUrl = 'https://localhost:5001/api/Item'
  const [items, setItems] = useState([])

  const getItemsData = async () => {
    const resp = await axios.get(apiUrl)
    setItems(resp.data)
  }

  useEffect(() => {
    getItemsData()
  }, [])

  return (
    <>
      <section className="Items">
        {items.map(item => {
          return (
            <ul>
              <li> Key: {item.id} </li>
              <li> Item SKU: {item.sku} </li>
              <li> Name: {item.name} </li>
              <li>Description: {item.shortDescription}</li>
              <li> Number In Stock: {item.numberInStock}</li>
              <li>Price: {item.price}</li>
              <li>Date Ordered: {item.dateOrdered}</li>
            </ul>
          )
        })}
      </section>
    </>
  )
}

export default Items
