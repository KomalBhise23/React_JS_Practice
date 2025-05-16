import React, {useState} from 'react'

function FormComp() {
  const [formData, setFormData] = useState({name: '', password: ''})

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Username: ${formData.username}, Password: ${formData.password}`)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="Username">
          Username &#160;
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label for="Password">
          Password &#160;
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <div>&#160;</div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
export default FormComp
