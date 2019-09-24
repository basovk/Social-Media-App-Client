import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
    // ako imamo token da kad kliknemo na login ili signup stranicu
    // a vec smo ulogirani da nas prebaci na home page

    <Route 
    {...rest} 
    render={(props) => 
        authenticated === true ? <Redirect to='/'/> : <Component {...props}/>
    }    
    />
)

AuthRoute.propTypes = {
    user: PropTypes.object
}

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps)(AuthRoute);
