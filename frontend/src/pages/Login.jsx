import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'


function Login() {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
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
        <FaSignInAlt /> Login
      </h1>
      <p>Connectez vous</p>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="email" className="form-control" id="email" name="email" value={email} placeholder="Entrez votre email" onChange={onChange} />  
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="password" name="password" value={password} placeholder="Entrez votre mot de passe" onChange={onChange} />  
        </div>
        <div className="form-group">
          <button type="submit" className='btn'>Se connecter</button>
        </div>
      </form>
    </section>
    
    </>

  )
}

export default Login