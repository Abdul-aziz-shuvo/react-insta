import {lazy,Suspense} from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import * as ROUTES from './constants/routes'
import './App.css';

const Login = lazy(() => (
    import('./pages/login')
))
const Register = lazy(() => (
    import('./pages/sign-up')
))
function App() {
  return (
    <Router>
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={Register} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
