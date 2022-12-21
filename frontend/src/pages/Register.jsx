import React from 'react'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'


function Register() {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2: '',
  })

  const {name, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name] : e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
    <section className="heading">
      <h1>
        <FaUser /> Register
      </h1>
      <p>Creez un compte</p>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" id="name" name="name" value={name} placeholder="Entrez votre nom" onChange={onChange} />  
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="email" name="email" value={email} placeholder="Entrez votre email" onChange={onChange} />  
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="password" name="password" value={password} placeholder="Entrez votre mot de passe" onChange={onChange} />  
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="password2" name="password2" value={password2} placeholder="Confirmez votre mot de passe" onChange={onChange} />  
        </div>
        <div className="form-group">
          <button type="submit" className='btn'>S'inscrire</button>
        </div>
      </form>
    </section>
    
    </>

  )
}

export default Register