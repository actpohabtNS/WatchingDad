const INIT_STATE ={
    isAdult: true,  //bool
    name: '',   //string
    email: '',  //string
    password: '',   //string
    loading: false, //bool
    error: '',  //string
    user: null, //obj
}

export default (state = INIT_STATE, action) => {
    switch (action.type){
        case 'is_adult_changed':
            return {...state, isAdult: action.payload};

        case 'name_changed':
            return {...state, name: action.payload};

        case 'email_changed':
            return {...state, email: action.payload};

        case 'password_changed':
            return {...state, password: action.payload};

        case 'signup_user_success':
        case 'signin_user_success':
            return {...state, ...INIT_STATE, user: action.payload};

        case 'signup_user_fail':
        case 'signin_user_fail':
            return { ...state, error: action.payload, loading: false, password: ''};

        case 'attempt_signup_user':
        case 'attempt_signin_user':
            return { ...state, loading: true, error: '' };
            
        default:
            return state;
    }
}