import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute ({ children }){
    // const auth = useAuth();
    return localStorage.getItem('user')
        ? children : <Navigate to="/login" />;
}