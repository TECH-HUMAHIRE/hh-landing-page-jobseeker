import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, RequireAuth } from './authProvider';
import AuthLayout from '../layout/authLayout';
import DashboardLayout from '../layout/dashboardLayout';
import GuestLayout from '../layout/guestLayout';
import RedirectPage from '../feature/guest/Redirect';
import Inbox from '../feature/auth/Inbox';
import InviteCandidates from '../feature/auth/Dashboard/InviteCandidates';
import AcceptedJob from '../feature/auth/Dashboard/AcceptedJob';
import Archive from '../feature/auth/Dashboard/Archive';
import Interview from '../feature/auth/Dashboard/Interview';
import MyResume from '../feature/auth/MyResume';
const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route element={<DashboardLayout></DashboardLayout>}>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <InviteCandidates />
                </RequireAuth>
              }
            />
            <Route
              path="/accepted-job"
              element={
                <RequireAuth>
                  <AcceptedJob />
                </RequireAuth>
              }
            />
            <Route
              path="/interview"
              element={
                <RequireAuth>
                  <Interview />
                </RequireAuth>
              }
            />
            <Route
              path="/archived"
              element={
                <RequireAuth>
                  <Archive />
                </RequireAuth>
              }
            />
          </Route>
          <Route
            path="/inbox"
            element={
              <RequireAuth>
                <Inbox />
              </RequireAuth>
            }
          />
          <Route
            path="/my-resume"
            element={
              <RequireAuth>
                <MyResume />
              </RequireAuth>
            }
          />
        </Route>
        <Route element={<GuestLayout />}>
          <Route path="/redirect" element={<RedirectPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};
export default App;
