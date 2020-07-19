import React, { Component } from 'react';
import TextInput from './TextInput';
import validate from './validate';

class FormComponent2 extends Component {

    constructor() {
        super();

        this.state = {
            formIsValid: false,
            formControls: {
                name: {
                    value: '',
                    placeholder: 'What is your name',
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true
                    }
                }

            }
        }
    }



    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls[name]
        };
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

        updatedControls[name] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        });
    }
    formSubmitHandler = () => {
        console.dir(this.state.formControls);
    }

    render() {
        return (
            <div>
                <TextInput name="name"
                    placeholder={this.state.formControls.name.placeholder}
                    value={this.state.formControls.name.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.name.touched}
                    valid={this.state.formControls.name.valid}
                />

                {/* <button onClick={this.formSubmitHandler}> Submit </button> */}

                {/* <button onClick={this.formSubmitHandler}
                    disabled={!this.state.formControls.name.valid}
                >
                    Submit
                </button> */}

                <button onClick={this.formSubmitHandler}
                    disabled={!this.state.formIsValid}
                >
                    Submit
                </button>
            </div>
        );
    }

}
export default FormComponent2;
