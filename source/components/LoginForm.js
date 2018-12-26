// Core
import React, { Component } from 'react';
import { Form, Field } from 'formik';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';

export class LoginForm extends Component {
    render() {
        const { touched, isSubmitting, errors, values } = this.props;

        const disabledStyle = cx({
            [ Styles.disabled ]: isSubmitting,
        });

        const emailStyle = cx(disabledStyle, {
            [ Styles.invalidInput ]: touched.email && errors.email,
        });

        const passwordStyle = cx(disabledStyle, {
            [ Styles.invalidInput ]: touched.password && errors.password,
        });

        const nameStyle = cx(disabledStyle, {
            [ Styles.invalidInput ]: touched.name && errors.name,
        });
        const  invalidEmailStyle  = (cx)({
            [ Styles.invalidInput]: touched.email && errors.email,  
        });
        const  invalidPassowrdsStyle  = (cx)({
            [Styles.invalidInput]: touched.password &&  errors.password,
        });
        const  disabledButtonStyle  = (cx)({
            [Styles.disabledButton]: isSubmitting,
        });

        
        const submittingMessage  = isSubmitting ? "Signing in... " : " Sign up";

        return (
            <Form>
                <Field
                    className = { nameStyle }
                    name = 'name'
                    placeholder = 'Name'
                    type = 'text'
                />
                <Field
                    className = { invalidEmailStyle }
                    name = 'email'
                    placeholder = 'Email'
                    type = 'email'
                />
                <Field
                    className = { invalidPassowrdsStyle }
                    name = 'password'
                    placeholder = 'Password'
                    type = 'password'
                />
                <label>
                    <Field
                        className = { invalidEmailStyle }
                        name = 'promo'
                        placeholder = 'Promo Code'
                        type = 'text'
                    />
                    <span>Promo Code</span>
                </label>
                <label>
                    <Field
                        checked = { values.remember }
                        name = 'remember'
                        type = 'checkbox'
                    />
                    <span>Remember Me</span>
                </label>

                <button
                    className = { disabledButtonStyle }
                    disabled = { isSubmitting }
                    type = 'submit' >
                    {submittingMessage}
                </button>
            </Form>);
    }
}
