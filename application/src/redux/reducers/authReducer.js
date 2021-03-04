import { LOGIN, LOGOUT } from '../actions/types'

const INITIAL_STATE = { email: null, token: null };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            //typo payload.login -> email
            return { ...state, email: action.payload.email, token: action.payload.token } 
        case LOGOUT:
            console.log('logging out')
            return { ...state, ...INITIAL_STATE }
        default:
            return state;
    }
}