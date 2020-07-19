
import React, { Component } from 'react';

// import PropTypes from 'prop-types';

class TestMatch extends Component {

    //     constructor() {
    //         super();
    //         this.state = {
    //             formControls: {
    //                 email: {
    //                     value: ''
    //                 },
    //                 name: {
    //                     value: ''
    //                 },
    //                 password: {
    //                     value: ''
    //                 }
    //             }
    //         }

    //     }

    //     changeHandler = event => {

    //         const name = event.target.name;
    //         const value = event.target.value;

    //         this.setState({
    //             formControls: {
    //                 ...this.state.formControls,
    //                 [name]: {
    //                     ...this.state.formControls[name],
    //                     value
    //                 }
    //             }
    //         });
    //     }


    //     render() {
    //         return (
    //             <form>
    //                 <label>email</label>
    //                 <input type="email"
    //                     name="email"
    //                     value={this.state.formControls.email.value}
    //                     onChange={this.changeHandler}
    //                 />
    //                 <br />
    //                 <label>Name</label>
    //                 <input type="text"
    //                     name="name"
    //                     value={this.state.formControls.name.value}
    //                     onChange={this.changeHandler}
    //                 />
    //                 <br />
    //                 <label>password</label>
    //                 <input type="password"
    //                     name="password"
    //                     value={this.state.formControls.password.value}
    //                     onChange={this.changeHandler}
    //                 />

    //             </form>
    //         );
    //     }

    // }

    //      constructor () {

    //       this.state = {
    //           formControls: {
    //               email: {
    //                 value: ''
    //               },
    //               name: {
    //                 value: ''
    //               },
    //               password: {
    //                 value: ''
    //               }
    //           }
    //       }

    //   }

    //   changeHandler = event => {

    //       const name = event.target.name;
    //       const value = event.target.value;

    //       this.setState({
    //         formControls: {
    //             ...this.state.formControls,
    //             [name]: {
    //             ...this.state.formControls[name],
    //             value
    //           }
    //         }
    //       });
    //   }


    //    render() {
    //       return (
    //           <form>

    //               <input type="email" 
    //                      name="email" 
    //                      value={this.state.formControls.email.value} 
    //                      onChange={this.changeHandler} 
    //               />

    //               <input type="text" 
    //                      name="name" 
    //                      value={this.state.formControls.name.value} 
    //                      onChange={this.changeHandler} 
    //               />

    //               <input type="password" 
    //                      name="password" 
    //                      value={this.state.formControls.password.value} 
    //                      onChange={this.changeHandler} 
    //               />

    //           </form>      
    //       );
    //   }

    // }

    constructor() {
        super();

        this.state = {
            formControls: {
                email: {
                    value: ''
                },
                name: {
                    value: ''
                },
                password: {
                    value: ''
                }
            }
        }

    }

    changeHandler = event => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        });
    }


    render() {
        return (
            <form>


                <label>email</label>
                <input type="email"
                    name="email"
                    value={this.state.formControls.email.value}
                    onChange={this.changeHandler}
                />

                <br />
                <label>name</label>

                <input type="text"
                    name="name"
                    value={this.state.formControls.name.value}
                    onChange={this.changeHandler}
                />
                <br />
                <label>passwdord</label>
                <input type="password"
                    name="password"
                    value={this.state.formControls.password.value}
                    onChange={this.changeHandler}
                />

            </form>
        );
    }

}

export default TestMatch;