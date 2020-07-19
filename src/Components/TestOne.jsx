
import React, { Component } from 'react';

// import PropTypes from 'prop-types';

class TestOne extends Component {

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

    submitFormHandler = event => {
        event.preventDefault();

        alart(this.refs.name.value); //will give us the name value
    }

    render() {
        return (
            <form onSubmit={this.submitFormHandler}>

                <input type="email"
                    name="email"
                    value={this.state.formControls.email.value}
                    onChange={this.changeHandler}
                />

                <input type="text"
                    name="name"
                    value={this.state.formControls.name.value}
                    onChange={this.changeHandler}
                />

                <input type="password"
                    name="password"
                    value={this.state.formControls.password.value}
                    onChange={this.changeHandler}
                />
                <br />
                <input
                    type='submit'
                />
            </form>
        );
    }

}

export default TestOne;