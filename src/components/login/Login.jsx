import React from 'react'
import { Field, reduxForm, submit } from 'redux-form'
import classes from './login.module.scss'

let LoginForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit} className={classes.loginForm}>
        <h1>Sign In</h1>
        <div>
          <Field placeholder={"Email"} name={"email"} component={"input"} type={"email"} />
        </div>
        <div>
          <Field placeholder={"Password"} name={"password"} type={"password"} component={"input"} />
        </div>
        <div>
          <Field component={"input"} name={"rememberMe"} id={"rememberMe"} type={"checkbox"} /> <label htmlFor={"rememberMe"}>remember me</label>
        </div>
        {props.error && <div className={"error"}>
          {props.error}
        </div>
        }
        <div className={classes.btnContain}>
          <button>Login</button>
        </div>
      </form>
    )
  }
  
  LoginForm = reduxForm({
    form: 'Login'
  })(LoginForm)

export default function Login() {
    const submit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={classes.loginContent}>
            <LoginForm onSubmit={submit}/>
        </div>
    )
}
