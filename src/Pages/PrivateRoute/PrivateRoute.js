import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading} = useAuth()
    if (isLoading) {
        return <div className="text-center my-5 py-5">
            <div className="my-3">
                <Spinner animation="grow" variant="danger" />
            </div>     
        </div>
    }
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user?.email ? (
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
        </div>
    );
};

export default PrivateRoute;