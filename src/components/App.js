import React, { useEffect, useState } from "react";
import {Route, Switch} from "react-router-dom"
import Home from "./Home";
import TradeBinder from "./TradeBinder";
import NavBar from "./NavBar";
import AddCard from "./AddCard";
import TradePage from "./TradePage";
import PendingTrades from "./PendingTrades";

let URL = 'http://localhost:3007/binder'

function App() {
  const [cards, setCards] = useState([])
 
useEffect(() =>{
    fetch(URL)
      .then((resp) => resp.json())
      .then((cards) => setCards(cards))
},[])

function handleAddCard(newCard) {
    setCards([...cards, newCard])
  }

return (
    <div>
    <NavBar />
      <Switch>  
        <Route exact path="/home">
         <Home cards={cards}/>
        </Route>
        <Route exact path="/tradebinder">
          <TradeBinder cards={cards} />
        </Route>
        <Route exact path="/tradepage">
          <TradePage cards={cards}/>
        </Route>
        <Route exact path="/addcard">
          <AddCard URL={URL} onAddCard={handleAddCard}/>
        </Route>
        <Route exact path="/pendingtrades">
          <PendingTrades />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;