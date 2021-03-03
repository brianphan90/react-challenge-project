import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'; 
import store from '../redux/store'
const mapStateToProps = state => {
    const { auth } = state
    console.log(auth)
    return {
        isAuth : auth.token
    }
}
export const ProtectedRoute = ({component : Component, ...rest}) => {
    return (
        <Route {...rest} render={
            (props) => {
                console.log(store.getState().auth.token)
                return store.getState().auth.token 
                    ? <Component {...props}/>
                    : <Redirect to={
                        {
                            pathname : '/login', 
                            state : {
                                from : props.location
                            }}}
                    />
            } 
        }/>
    )
}

export default connect(mapStateToProps)(ProtectedRoute)