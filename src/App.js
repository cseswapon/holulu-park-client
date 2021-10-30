import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProviders from './Pages/Context/Authproviders';
import Manage from './Pages/Manage/Manage';
import Order from './Pages/Order/Order';
import Add from './Pages/Add/Add';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProviders>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/singup">
                <Register></Register>
              </Route>
              <PrivateRoute exact path="/service/:id">
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>
              <PrivateRoute exact path="/manage">
                <Manage></Manage>
              </PrivateRoute>
              <PrivateRoute exact path="/order">
                <Order></Order>
              </PrivateRoute>
              <PrivateRoute exact path="/add">
                <Add></Add>
              </PrivateRoute>
              <Route exact path="*">
                <Notfound></Notfound>
              </Route>
            </Switch>
            <Footer></Footer>
        </Router>
      </AuthProviders>
    </div>
  );
}

export default App;
