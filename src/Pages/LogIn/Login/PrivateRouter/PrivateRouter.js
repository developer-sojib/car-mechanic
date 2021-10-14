import React from 'react';
import useAuth from './../../../../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRouter = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />


    );
};

export default PrivateRouter;