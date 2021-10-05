import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Skeleton of navigation for homepage
function Routes() {
    let login, signup; // will be functions later

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>

                <Route exact path="/companies">
                    <CompanyList />
                </Route>

                <Route exact path="/companies/:handle">
                    <CompanyDetail />
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