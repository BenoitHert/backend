import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteTodo} from '../features/todos/todoSlice'


function TodoItem({todo}) {
    const dispatch = useDispatch()
  return (
    <div className='todo'>
        <div>
            {new Date(todo.createdAt).toLocaleString('fr-FR')}
        </div>
        <h2>
            {todo.title}
        </h2>
        <button onClick={() => dispatch(deleteTodo(todo._id))} className="close">X</button>
    </div>
  )
}

export default TodoItem