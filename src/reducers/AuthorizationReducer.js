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
        case 'isAdult_changed':
            return {...state, isAdult: action.payload};

        case 'name_changed':
            return {...state, name: action.payload};

        case 'email_changed':
            return {...state, email: action.payload};

        case 'password_changed':
            return {...state, password: action.payload};

        case 'signin_user_success':
            return {...state, user: action.payload, ...INIT_STATE};

        case 'signin_user_fail':
            return { ...state, error: action.payload, loading: false, password: ''};

        case 'attempt_login_user':
            return { ...state, loading: true, error: '' };
            
        default:
            return state;
    }
}