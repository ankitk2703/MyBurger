import React,{Component} from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder'
import {Route, Switch} from 'react-router-dom'
import Checkout from '../src/containers/CheckOut/Checkout'


class App extends Component {
  render()
  {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/Checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }

}

export default App;
