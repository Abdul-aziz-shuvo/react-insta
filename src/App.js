import {lazy,Suspense} from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import * as ROUTES from './constants/routes'
import './App.css';
import  {UserProvider} from "./context/userContext";
import ProtectedRoute from "./helper/protectedRoute";
import IsLoggedIn from "./helper/isloggedIn";



const Login = lazy(() => (
    import('./pages/login')
))
const Register = lazy(() => (
    import('./pages/sign-up')
))
const Dashboard = lazy(() => (
    import('./pages/dashboard')
))
const Profile = lazy(() => (
    import('./pages/profile')
))
const NotFound = lazy(() => (
    import('./pages/NotFound')
))
function App() {

  return (
      <Router>
          <UserProvider >
                <Suspense fallback={<p>loading...</p>}>
                  <Switch>

                      <IsLoggedIn path={ROUTES.LOGIN} component={Login} />
                      <IsLoggedIn path={ROUTES.SIGN_UP} component={Register} />
                      <ProtectedRoute  path={ROUTES.DASHBOARD} component={Dashboard}/>
                      <ProtectedRoute  path={ROUTES.PROFILE} component={Profile}/>
                      <Route component={NotFound} />
                  </Switch>
                </Suspense>
          </UserProvider>
      </Router>

  );
}

export default App;
