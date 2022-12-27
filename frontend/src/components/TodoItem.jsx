import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {deleteTodo, updateTodo} from '../features/todos/todoSlice'
import {FaPencilAlt} from 'react-icons/fa'


function TodoItem({todo}) {
  const [title, setTitle] = useState(todo.title)

    const dispatch = useDispatch()

    const onChange = (e) => {
      setTitle(e.target.value)
      dispatch(updateTodo(todo._id))
    }
  return (
    <div className='todo'>
        {/* <div>
            {new Date(todo.createdAt).toLocaleString('fr-FR')}
        </div> */}
        <input onChange={onChange(e)}>
            {todo.title}
        </input>
        <button onClick={() => dispatch(deleteTodo(todo._id))} className="close">X</button>
    </div>
  )
}

export default TodoItem