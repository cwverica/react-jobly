import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from '../homepage/Homepage';
import CompList from '../companies/CompList';
import JobList from "../jobs/JobList";
import CompDetail from "../companies/CompDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import ProtectedRoute from "./ProtectedRoute";

// Skeleton of navigation for homepage
function Routes({ login, signup }) {

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>

                <ProtectedRoute exact path="/companies">
                    <CompList />
                </ProtectedRoute>

                <ProtectedRoute exact path="/companies/:handle">
                    <CompDetail />
                </ProtectedRoute>

                <ProtectedRoute exact path="/jobs">
                    <JobList />
                </ProtectedRoute>

                <Route exact path="/login">
                    <LoginForm login={login} />
                </Route>

                <Route exact path="/signup">
                    <SignupForm signup={signup} />
                </Route>

                <ProtectedRoute path="/profile">
                    <ProfileForm />
                </ProtectedRoute>

                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Routes;