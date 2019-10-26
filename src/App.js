import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //Rename BrowserRouter AS Something that you like
import ItemDetail from './itemDetail';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" exact component={Shop}/>
        <Route path="/shop/:id" component={ItemDetail}/>
        </Switch>
      </div>
    </Router>

//type in EXACTLY A SLASH SYMBOL
  );
}

const Home = () => (
  <div>
    <h1> Home Page </h1>
  </div>
)


export default App;
