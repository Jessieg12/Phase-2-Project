import React, { useState } from "react";
import TradePageSelected from "./TradePageSelected";
import TradePageCards from "./TradePageCards";
import "../comp-css/TradePage.css"

function TradePage({cards}){
  const [tradeCards, setTradeCards] = useState([])

  function handleClick(card){    
    if(!tradeCards.includes(card)){
    setTradeCards([...tradeCards, card])
  }}

  return(
    <div>
      <p className="tradeHomeTitle">Shown below are cards up for trade!</p>
	    <p className="clickCards">Click on the card(s) you want for trade</p>
      <TradePageCards cards={cards} handleClick={handleClick}/>
	    <TradePageSelected setTradeCards={setTradeCards} tradeCards={tradeCards}/>
    </div>
    )
}

export default TradePage