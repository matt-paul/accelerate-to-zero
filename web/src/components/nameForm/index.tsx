import React from "react"

class NameForm extends React.Component {
  nameRef = React.createRef<HTMLInputElement>()
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (this.nameRef.current) {
      alert(this.nameRef.current.value)
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.nameRef} />
        <button>Submit</button>
      </form>
    )
  }
}

export default NameForm
