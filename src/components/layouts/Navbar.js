import React from 'react'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
const Navbar = (props) => {
    const { auth } = props;
    // console.log(auth);
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        <div className="Navbar">
            <nav>
                <div class="nav-wrapper  black">
                    <Link to='/' className="brand-logo">Campus Management system</Link>
                    { links }
                </div>
            </nav>
        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log(state);
    return{
      auth: state.firebase.auth
    }
  }
export default connect(mapStateToProps)(Navbar);