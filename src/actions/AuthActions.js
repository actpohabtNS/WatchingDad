import firebase from 'firebase'
import { navigate } from '../navigationRef'

export const isAdultChanged = (text) => ({
    type: 'is_adult_changed',
    payload: text
  })

export const nameChanged = (text) => ({
    type: 'name_changed',
    payload: text
  })

export const emailChanged = (text) => ({
    type: 'email_changed',
    payload: text
  })

export const passwordChanged = (text) => ({
    type: 'password_changed',
    payload: text
  })

export const loadingChanged = (text) => ({
    type: 'loading_changed',
    payload: text
  })

export const errorChanged = (text) => ({
    type: 'error_changed',
    payload: text
  })

export const userChanged = (text) => ({
    type: 'user_changed',
    payload: text
  })

export const toDefault = () => ({
  type: 'to_default'
})

export const signupUser = ({ email, password }) => 
  (dispatch) => {
   dispatch({ type: 'attempt_signup_user' });

   firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({ type: 'signup_user_success', payload: user })

      navigate("Location");
    })
    .catch(() => dispatch({ type: 'signup_user_fail', payload: "Sign Up failed." }))
     
 }

export const signinUser = ({ email, password }) => 
   (dispatch) => {
    dispatch({ type: 'attempt_signin_user' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: 'signin_user_success', payload: user })
        
        navigate("Location");
      })
      .catch(() => dispatch({ type: 'signin_user_fail', payload: "Authentication failed." }))
  }