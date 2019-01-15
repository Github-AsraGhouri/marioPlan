import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class Dashboard extends Component{
    render(){
        const { auth } =this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        return(
            <div>
                <h1>Students Dashbaord</h1>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return{
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Dashboard);