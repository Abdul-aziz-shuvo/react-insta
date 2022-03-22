import {lazy,Suspense} from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import * as ROUTES from './constants/routes'
import './App.css';
import UserContext from "./context/userContext";
import useAuthListener from "./hooks/useAuthListener";

const Login = lazy(() => (
    import('./pages/login')
))
const Register = lazy(() => (
    import('./pages/sign-up')
))
const Dashboard = lazy(() => (
    import('./pages/dashboard')
))
const NotFound = lazy(() => (
    import('./pages/NotFound')
))
function App() {
    const { user } = useAuthListener();
  return (
      <UserContext.Provider value={{ user }}>
          <Router>
            <Suspense fallback={<p>loading...</p>}>
              <Switch>
                <Route path={ROUTES.LOGIN} component={Login} />
                <Route path={ROUTES.SIGN_UP} component={Register} />
                <Route path={ROUTES.DASHBOARD} component={Dashboard} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </Router>
      </UserContext.Provider>
  );
}

export default App;
