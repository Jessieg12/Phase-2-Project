import React, { useEffect, useState } from "react";
import TradingCards from "./TradingCards";
import "../comp-css/MakeTradeHome.css"

function MakeTradeHome({cards}){
    let [tradeCards, setTradeCards] = useState([])
    let [statement, setStatement] = useState([])

    function handleClick(card){    
     if(!tradeCards.includes(card)){
     const updatedTradeCards = [...tradeCards, card]
     setTradeCards(updatedTradeCards)
    }
	}

	useEffect(() => {
		let newArray = []
		tradeCards.map((card) => newArray.push(card.cardName))
		setStatement(newArray)
	},[tradeCards])
    
    let mappedcards= cards.map((card)=> 
    <div
    key={card.id} 
    onClick={() => handleClick(card)}
    className="tradeCard">
        <h1>{card.cardName}</h1>
        <h2>{card.cardSet}</h2>
        <div>Is this card for trade?
        {card.forTrade === false ? 
        <p className="NFT">Not for Trade</p> : 
        <p className="ForTrade">Available for Trade</p>}
        </div>
    </div>
    )

    return(
        <div>
            <p className="tradeHomeTitle">See a card that isn't for trade? Shoot me an offer anyways!</p>
						<p className="clickCards">Click on the card(s) you want to trade</p>
            {mappedcards}
						<TradingCards setTradeCards={setTradeCards} statement={statement} tradeCards={tradeCards}/>
        </div>
    )
}

export default MakeTradeHome