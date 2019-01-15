import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
class SignIn extends Component {
    state = {
        email: '',
        password: ''
      }
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
      }
    render() {
        const { authError, auth } = this.props;
        if(auth.uid) return <Redirect to='/'/>
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="email" type="email" class="validate" onChange={this.handleChange} />
                            <label for="email">Email</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>

                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="password" type="password" class="validate" onChange={this.handleChange} />
                            <label for="password">Password</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                        </div>
                    </div>
                    <div className="row">
                    <div class="col s3 offset-s4 ">
                    <button class="waves-effect waves-light btn-small left">Login</button>
                    </div>
                    <div class="col s3">
                    <NavLink to='/signup' className="waves-effect waves-light btn-small">Signup</NavLink>
                    </div>
                    </div>
                    <div className="center red-text">
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
