import React, { useState } from "react";
import "../comp-css/TradingCards.css"

function TradingCards({tradeCards, statement}){
  let [tradingCardName, setTradingCardname] = useState('')
  let [userName, setUserName] = useState('')

  let mappedTradeCards = tradeCards.map((card) => <div key={card.id}>{card.cardName}</div>)
  
  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3007/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        commitedTrade: `${userName} wants to trade ${tradingCardName} for ${statement}`
      }),
    })
      .then((r) => r.json())
      .then(alert("Trade added!"))
    }
    

  return(
    <div className="trades">
      <h1 className="selectedCards">Card(s) Selected to be traded!</h1>
      {mappedTradeCards}
      <h2>What would you like to trade?</h2>
        <div>Please fill out the following trade form.</div>
        <form onSubmit={handleSubmit}>
          <p>Please enter the card name(s) you wish to trade</p>
            <input
            type="text"
            value={tradingCardName}
            onChange={(e) => setTradingCardname(e.target.value)}
            placeholder="Enter Card Name"> 
            </input>
          <p>Please enter your user Name</p>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your User Name"> 
            </input>
            {statement.length && tradingCardName.length && userName.length > 0 ? <input type="submit" value={'Submit trade!'}/> : <p>Please complete the form above!</p>}
        </form>
        {statement.length && tradingCardName.length && userName.length > 0 ? 
        <p>{userName} would like to trade {tradingCardName} for {statement}</p> : 
        <p>Trade information will display here!</p>}
    </div>
  )
}

export default TradingCards