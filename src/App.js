import React, { useState } from 'react'

const App = () => {

  const [ countState, setCountState ] = useState({
    count: 0,
    name: 'John Doe'
  }) 

  

  countState.handleIncrement = () => {
    setCountState({ ...countState, count: countState.count + 1 })
  }

  countState.handleDecrement = () => {
    setCountState({ ...countState, count: countState.count - 1 })
  }

  const [userState, setUserState] = useState({
    name: '',
    dispName: ''
  })

  userState.handleInputChange = event => {
    setUserState({ ...userState, [event.target.name]: event.target.value })
  }

  userState.handleSubmit = event => {
    event.preventDefault()
    setUserState({ ...userState, dispName: userState.name, name: '' })
  }

  return (
    <>
    <h1>Name:{countState.name} </h1>
      <h1>Count: {countState.count}</h1>
      <button onClick={countState.handleIncrement}>+</button>
      <button onClick={countState.handleDecrement}>-</button>
      <hr/>
      <h1>Name: {userState.dispName}</h1>
      <form>
        <p>
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            name="name"
            id="name"
            onChange={userState.handleInputChange}
            value={userState.name} />
        </p>
        <button onClick={userState.handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default App
