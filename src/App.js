import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import ProductDetails from './components/ProductDetails'
import CheckOutPage from './components/CheckOutPage'


import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/products" component={Products} />
      <Route exact path="/cart" component={Cart} />
      <ProtectedRoute exact path="/cart/:id" component={Cart} />
      <Route exact path="/product-details/:id" component={ProductDetails} />
      <Route exact path="/check-out" component={CheckOutPage} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
