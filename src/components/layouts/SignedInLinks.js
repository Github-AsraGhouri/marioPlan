import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut} from '../../store/actions/authActions'
const SignedInLinks = (props) => {
    
    return (
        <div className="SignedInLinks">
            <ul className="right">
            <li><a onClick={props.signOut}>Log Out</a></li>
            </ul>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);