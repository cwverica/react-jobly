import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from '../homepage/Homepage';
import CompList from '../companies/CompList';
import JobList from "../jobs/JobList";
import CompDetail from "../companies/CompDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";

// Skeleton of navigation for homepage
function Routes(login, signup) {

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>

                <Route exact path="/companies">
                    <CompList />
                </Route>

                <Route exact path="/companies/:handle">
                    <CompDetail />
                </Route>

                <Route exact path="/jobs">
                    <JobList />
                </Route>

                <Route exact path="/login">
                    <LoginForm login={login} />
                </Route>

                <Route exact path="/signup">
                    <SignupForm signup={signup} />
                </Route>

                <Route path="/profile">
                    <ProfileForm />
                </Route>

                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Routes;