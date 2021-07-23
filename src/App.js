import './App.scss';
import Home from './pages/Home'
import store from './store/store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import ProductDetails from './pages/productDetail'
import Basket from "./pages/basket";
import About from './pages/About';
import Blog from './pages/Blog';



function App() {
  return (
    <BrowserRouter> 
    <Provider store={store}>
      <div className="App">
          <Route exact path='/' component={Home} />
          <Route exact path='/product/:id' component={ProductDetails} />
          <Route exact path='/basket' component={Basket} />
          <Route exact path='/about' component={About} />
          <Route exact path='/blog' component={Blog} />
      </div>
    </Provider>
   </BrowserRouter> 
  );
}

export default App;

