import React, {useState, useContext} from 'react';
import Input from '../../shared/components/FormElements/Input';
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators';
import {useForm} from '../../shared/hooks/form-hook';
import Card from '../../shared/components/UIElements/Card';
import './Auth.css';
import {AuthContext} from '../../shared/context/context-auth';
import Button from '../../shared/components/FormElements/Buton';
const Auth = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const auth = useContext(AuthContext);
    const [formState, inputHandler, setFormData] = useForm(
      {
        email: {
          value: '',
          isValid: false
        },
        password: {
          value: '',
          isValid: false
        }
      },
      false
    );
    
    const swichModeHandler = () => {
      if(!isLoginMode){
        setFormData({
          ...formState.inputs,
          name: undefined
        }, formState.email.isValid, formState.password.isValid);
      } else{
        setFormData({
          ...formState.inputs,
          name: {
            value: '',
            isValid:false
          }
        }, false)
      }
      setIsLoginMode(prevMode => !prevMode);
    };

    const authSubmitHandler = event => {
      event.preventDefault();
      console.log(formState.inputs);
      auth.login();
    };
    
    

    return (
      <Card className="authentication">
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
        {!isLoginMode && <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name."
            onInput={inputHandler}
          />}
          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid password, at least 5 characters."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? "LOGIN" : "SIGNUP"}
          </Button>
        </form>
        <Button inverse onClick={swichModeHandler}>SWTICH TO {isLoginMode ? "SIGNUP" : "LOGIN"}</Button>
      </Card>
    );
  };
export default Auth;