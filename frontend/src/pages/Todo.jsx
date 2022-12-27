import React from 'react'
import TodoForm from '../components/TodoForm'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Spinner from '../components/Spinner'
import { getTodos, reset } from '../features/todos/todoSlice'
import TodoItem from '../components/TodoItem'



function Todo() {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const {todos, isLoading, isError, message} = useSelector((state) => state.todos)
  
    useEffect(() => {
      if(isError){
        console.log(message)
      }

      if(!user){
        navigate('/login')
      }

      dispatch(getTodos())

      return () => {
        dispatch(reset())
      }
    }, [user, navigate, isError, message, dispatch])
  
    if(isLoading){
      return ( <Spinner />)
    }
  
    return (
      <>
        <section classname="heading">
          <h1>Welcome {user && user.name}</h1>  
          <p>Dashboard</p>
        </section>

        <TodoForm />

      <section className="content">
        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo) => (
              <TodoItem key={todo._id} todo={todo} />
            ))}
          </div>
        ) : (<h3>Vous n'avez rien à faire !</h3>)}
      </section>
      
      
      
      </>
    )
}

export default Todo