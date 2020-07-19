import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      firstName: '',
      lastName: '',
      password: '',
      gender: ''
    }
  }

  // updateInput = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value,

      // [this.target.name]: e.target.value,
      // [e.target.firstName]: e.target.value,
      // [e.target.lastName]: this.target.lastName,
    })
  }
  // firsthandler = e => {
  //   this.setState({
  //     [e.target.firstName]: e.target.value
  //   })
  // }
  // lasthandler = e => {
  //   this.setState({
  //     [e.target.lastName]: e.target.value
  //   })
  // }
  // passwordhandler = event => {
  //   this.setState({
  //     [event.target.password]: event.target.value
  //   })
  // }

  // genderhandler = event => {
  //   this.setState({
  //     [event.target.value]: event.target.value
  //   })
  // }
  // // validate = () => {
  // const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  // const re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/

  // if (
  // reg.test(this.state.email) &&
  // this.state.name.length > 1
  // re.test(this.state.phno)
  // ) {
  // console.log('true')
  // return true
  // } else {
  // console.log('false')

  // return false
  // }
  // }

  // call = () => {
  // const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  // const re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
  // if (re.test(this.state.phno) === false) {
  // this.setState({
  // dataph: 'Invalid Phone No'
  // })
  // }
  // if (reg.test(this.state.email) === false) {
  // this.setState({
  // dataem: 'Invalid Email'
  // })
  // }
  // if (this.state.name.length < 2) {
  // this.setState({
  // data: 'Wrong Name'
  // })
  // }
  // }

  // addUser = e => {
  //   e.preventDefault()
  //   var a = this.validate()

  //   if (a) {
  //      db.collection('student').add({
  //       name: this.state.name,
  //       email: this.state.firstName,
  //       gender: this.state.lastName,
  //       parent: this.state.password,
  //       phno: this.state.gender,

  //     })
  //     this.setState({
  //       name: '',
  //       firstName: '',
  //       lastName: '',
  //       password: '',
  //       gender: ''

  //     })
  //   } else {
  //     this.call()
  //   }
  // }
  handleSubmit = e => {
    e.preventDefault()
    alert(this.state.name, this.state.firstName, this.state.lastName, this.state.gender)
    console.log(this.state.name, this.state.firstName, this.state.lastName, this.state.gender)

    // this.setState({
    //   name: this.state.name,
    //   firstName: this.state.firstName,
    //   lastName: this.state.lastName,



    // })
    this.setState({
      name: '',
      firstName: '',
      lastName: '',
      password: '',
      gender: ''
    })
  }


  render() {
    return (
      <div>


        <form onSubmit={this.handleSubmit}>
          <h1>User Registration</h1>
          <label>
            Name:
          <input
              type='text'
              name='name'
              placeholder='Full name'
              onChange={this.updateInput}
              value={this.state.name}
            />
            <br />
          </label>


          <label>FirstName :
          <input
              type='text'
              name='firstName'
              placeholder='First name'
              onChange={this.updateInput}
              value={this.state.firstName}
            />
            <br />
          </label>


          <label>LastName :
          <input
              type='text'
              name='lastName'
              placeholder='LastName '
              onChange={this.updateInput}
              value={this.state.lastName}
            />
            <br />
          </label>

          {/* <label>LastName :
          <input
              type='text'
              name='lastName'
              placeholder='LastName...'
              onChange={this.lasthandler}
              value={this.state.lastName}
            />
            <br />
          </label> */}



          {/* <label>Password :
                <input
              type='password'
              name='password'
              placeholder='Passowrd '
              onChange={this.updateInput}
              value={this.state.Passowrd}
            /> */}
          {/* <br /> */}
          {/* </label> */}
          <br />
          <label>Gender :</label>
          <select onChange={this.updateInput} defaultValue='Select Gender'>
            <br />
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div >
    )
  }
}

export default Form
