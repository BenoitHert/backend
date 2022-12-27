import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteShoplist } from '../features/shopList/shopSlice'

function ShopItem({item}) {
    const dispatch = useDispatch()
  return (
    <div className='item'>
        <h2>
            {item.title}
        </h2>
        <button onClick={() => dispatch(deleteShoplist(item._id))} className="close">X</button>
    </div>
  )
}

export default ShopItem