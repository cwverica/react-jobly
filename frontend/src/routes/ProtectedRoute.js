import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../auth/UserContext";

/** 
 * In routing component, use these instead of <Route>. 
 * 
 * will check if there is a valid current user. 
 * If no user is present, redirects to login.
 */

function ProtectedRoute({ exact, path, children }) {
    const { currentUser } = useContext(UserContext);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    );
}

export default ProtectedRoute;
