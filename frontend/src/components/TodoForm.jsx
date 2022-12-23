import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {createTodo} from '../features/todos/todoSlice'



function DashboardForm() {
    const [title, setTitle] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createTodo({title}))
        setTitle('')
    }

  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="title">Todo</label>
                <input type="text" name='title' id='title' value={title} onChange={(e)=> setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type='submit'>Ajouter Todo</button>
            </div>
        </form>
    </section>
  )
}

export default DashboardForm