import firebase from 'firebase'
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

export const loginUser = ({ email, password }) => 
   (dispatch) => {
    dispatch({ type: 'attempt_login_user' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch, "Authentication Failed."))
      })
  }

const loginUserFail = (dispatch, error) => {
  dispatch({ type: 'login_user_fail', payload: error })
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: 'login_user_success', payload: user });
}