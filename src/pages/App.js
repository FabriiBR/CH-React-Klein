import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NavBar } from '../components/navBar/navBar'
import { ItemListContainer } from '../components/itemListContainer/itemListContainer'
import { ItemDetailContainer } from '../components/itemDetailContainer/itemDetailContainer'
import { Cart } from '../components/cart/cart'
import { CartProvider } from '../context/cartContext'
import { Form } from '../components/form/form'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path='/'>
          <ItemListContainer/>
          </Route>
          <Route path="/curso/:courseId">
            <ItemDetailContainer/>
          </Route>
          <Route path="/category/:category">
            <ItemListContainer />
          </Route>
          <Route path='/cart'>
            <Cart/>
          </Route>
          <Route path='/form'>
            <Form/>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;