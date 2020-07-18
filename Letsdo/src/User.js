import React from 'react'

// import firebase from './firebase'
class User extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      name: '',
      gender: '',
      parent: '',
      phno: '',
      dob: '',
      address: '',
      data: '',
      dataem: '',
      dataph: ''
    }
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  // show = () => {
  //   const db =
  //     // firebase.firestore()
  //     db.collection('student')
  //       .get()
  //       .then(res => {
  //         console.log(res)
  //       })
  // }

  validate = () => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/

    if (
      reg.test(this.state.email) &&
      this.state.name.length > 1 &&
      re.test(this.state.phno)
    ) {
      console.log('true')
      return true
    } else {
      console.log('false')

      return false
    }
  }

  addUser = e => {
    e.preventDefault()
    var a = this.validate()

    if (a) {
      // const db =
      // firebase.firestore()

      // const userRef = db.collection('student').add({
      //   name: this.state.name,
      //   email: this.state.email,
      //   gender: this.state.gender,
      //   parent: this.state.parent,
      //   phno: this.state.phno,
      //   dob: this.state.dob,
      //   address: this.state.address
      // })
      this.setState({
        name: '',
        email: '',
        gender: '',
        parent: '',
        phno: '',
        dob: '',
        address: ''
      })
    } else {
      this.call()
    }
  }
  call = () => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
    if (re.test(this.state.phno) === false) {
      this.setState({
        dataph: 'Invalid Phone No'
      })
    }
    if (reg.test(this.state.email) === false) {
      this.setState({
        dataem: 'Invalid Email'
      })
    }
    if (this.state.name.length < 2) {
      this.setState({
        data: 'Wrong Name'
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.addUser}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            placeholder='Full name'
            onChange={this.updateInput}
            value={this.state.name}
          />
          {this.state.data}
        </label>
        <br />
        <label>
          Address:
          <input
            type='text'
            name='address'
            placeholder='address'
            onChange={this.updateInput}
            value={this.state.address}
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            type='text'
            name='gender'
            placeholder='gender'
            onChange={this.updateInput}
            value={this.state.gender}
          />
        </label>
        <br />
        <label>
          Parent's Name:
          <input
            type='text'
            name='parent'
            placeholder="Parent's Name"
            onChange={this.updateInput}
            value={this.state.parent}
          />
        </label>
        <br />
        <label>
          Phone No:
          <input
            type='text'
            name='phno'
            placeholder='Phone no'
            onChange={this.updateInput}
            value={this.state.phno}
          />
          {this.state.dataph}
        </label>
        <br />
        <label>
          DOB:
          <input
            type='text'
            name='dob'
            placeholder='Date of Birth'
            onChange={this.updateInput}
            value={this.state.dob}
          />
        </label>
        <br />
        <label>
          Email Id:
          <input
            type='email'
            name='email'
            placeholder='email'
            onChange={this.updateInput}
            value={this.state.email}
          />
          {this.state.dataem}
        </label>
        <br />
        <button type='submit'>Submit</button>
        <button onClick={this.show}>Show</button>
      </form>
    )
  }
}
export default User
