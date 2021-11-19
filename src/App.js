import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Banner from './components/Pages/Banner/Banner';
import Login from './components/Pages/Login/Login/Login';
import Register from './components/Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Products from './components/Pages/AllProducts/Products/Products';
import Contact from './components/Pages/Contact/Contact';
import Explore from './components/Pages/AllProducts/Product/Explore/Explore';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Review from './components/Pages/Reviews/Review';
import Purchase from './components/Pages/Purchase/Purchase';
import AddBike from './components/Pages/AddCar/AddBike';
import Dashboard from './components/Pages/Dashboard/Dashboard/Dashboard';
import Order from './components/Pages/Order/Order';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/banner">
              <Banner></Banner>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/purchase">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/order">
              <Order></Order>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/addbike">
              <AddBike></AddBike>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
