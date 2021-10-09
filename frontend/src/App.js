import React, { useState, useEffect } from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
import useLocalStorage from "./customHooks/useLocalStorage";
import Navbar from "./routes/Navbar";
import Routes from "./routes/Routes";
import JoblyApi from "./api/api";
import UserContext from "./auth/UserContext";
import jwt from "jsonwebtoken";

export const TOKEN_STORAGE_ID = 'jobly-token';

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [applicationIds, setApplicationIds] = useState(new Set([]));


  /** site-wide available logout function */
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  /** Handles Login
   * async with boolean return to check if verified.
   */
  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed: ", errors);
      return { success: false, errors };
    }
  }

  /** Handles signup
   * automatically logs user in
   * 
   * async with boolean return, await response before proceeding
   */
  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("Signup failed:", errors);
      return { success: false, errors };
    }
  }

  /** Checks if a job has been applied for. */
  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  /** Apply to a job: make API call and update set of application IDs. */
  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  useEffect(function loadUserInfo() {

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (err) {
          console.error("Couldn't log in: ", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  if (!infoLoaded) return <div>Loading...</div>

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}>
        <div className="App">
          <Navbar logout={logout} />
          <Routes login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
