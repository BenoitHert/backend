import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ShopItem from '../components/ShopItem'
import Spinner from '../components/Spinner'
import { getShoplist, reset } from '../features/shopList/shopSlice'

function ShoppingList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {item, isError, isLoading, message} = useSelector((state) => state.item)

  useEffect(() => {
    if(isError){
      console.log(message)
    }

    if(!user){
      navigate('/login')
    }

    dispatch(getShoplist())

    return () => {
      dispatch(reset())
    }

  }, [user, navigate, dispatch, isError, message])

  if(isLoading){
    return( <Spinner/>)
  }

  return (
    <>
      <section className='heading'>
        <h1> Welcome {user && user.name}</h1>
        <p>Votre liste de course :</p>
      </section>

      <section className="content">
        {item.length > 0 ? (
          <div className="item">
            {item.map((item) => (
              <ShopItem key={item._id} item={item} />
            ))}
          </div>
        ) : (<h3>Votre liste de course est vide!</h3>)}
      </section>
    </>
  )
}

export default ShoppingList