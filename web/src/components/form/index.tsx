import React, { useState, SyntheticEvent } from "react"

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const updateFormData = (event: SyntheticEvent) =>
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement)
        .name]: (event.target as HTMLInputElement).value,
    })

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    alert(`Submitting Name ${formData.firstName}`)
  }

  const { firstName, lastName, email, message } = formData
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={firstName}
        onChange={e => updateFormData(e)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={e => updateFormData(e)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <input
        value={email}
        onChange={e => updateFormData(e)}
        placeholder="Email"
        type="text"
        name="email"
        required
      />
      <textarea
        value={message}
        onChange={e => updateFormData(e)}
        placeholder="Message"
        name="message"
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
