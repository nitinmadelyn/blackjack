import React from "react";
import "../Assets/scss/main.css";
import CardBack from "../Assets/images/card-back.png";
import AceOfH from "../Assets/images/AH.png";
import TwoOfH from "../Assets/images/2H.png";
import ThreeOfH from "../Assets/images/3H.png";
import FourOfH from "../Assets/images/4H.png";
import FiveOfH from "../Assets/images/5H.png";
import SixOfH from "../Assets/images/6H.png";
import SevenOfH from "../Assets/images/7H.png";
import EightOfH from "../Assets/images/8H.png";
import NineOfH from "../Assets/images/9H.png";
import TenOfH from "../Assets/images/10H.png";
import JackOfH from "../Assets/images/JH.png";
import QueenOfH from "../Assets/images/QH.png";
import KingOfH from "../Assets/images/KH.png";
import AceOfC from "../Assets/images/AC.png";
import TwoOfC from "../Assets/images/2C.png";
import ThreeOfC from "../Assets/images/3C.png";
import FourOfC from "../Assets/images/4C.png";
import FiveOfC from "../Assets/images/5C.png";
import SixOfC from "../Assets/images/6C.png";
import SevenOfC from "../Assets/images/7C.png";
import EightOfC from "../Assets/images/8C.png";
import NineOfC from "../Assets/images/9C.png";
import TenOfC from "../Assets/images/10C.png";
import JackOfC from "../Assets/images/JC.png";
import QueenOfC from "../Assets/images/QC.png";
import KingOfC from "../Assets/images/KC.png";
import AceOfD from "../Assets/images/AD.png";
import TwoOfD from "../Assets/images/2D.png";
import ThreeOfD from "../Assets/images/3D.png";
import FourOfD from "../Assets/images/4D.png";
import FiveOfD from "../Assets/images/5D.png";
import SixOfD from "../Assets/images/6D.png";
import SevenOfD from "../Assets/images/7D.png";
import EightOfD from "../Assets/images/8D.png";
import NineOfD from "../Assets/images/9D.png";
import TenOfD from "../Assets/images/10D.png";
import JackOfD from "../Assets/images/JD.png";
import QueenOfD from "../Assets/images/QD.png";
import KingOfD from "../Assets/images/KD.png";
import AceOfS from "../Assets/images/AS.png";
import TwoOfS from "../Assets/images/2S.png";
import ThreeOfS from "../Assets/images/3S.png";
import FourOfS from "../Assets/images/4S.png";
import FiveOfS from "../Assets/images/5S.png";
import SixOfS from "../Assets/images/6S.png";
import SevenOfS from "../Assets/images/7S.png";
import EightOfS from "../Assets/images/8S.png";
import NineOfS from "../Assets/images/9S.png";
import TenOfS from "../Assets/images/10S.png";
import JackOfS from "../Assets/images/JS.png";
import QueenOfS from "../Assets/images/QS.png";
import KingOfS from "../Assets/images/KS.png";
import Player from "./Player";
import { getLocalStorage } from "../Helper/Helper";

export default function Game(props) {
  const {
    randomizedDecks,
    playersCards,
    dealersCards,
    chipCount,
    setChipCount,
    betAmount,
    setBetAmount,
    playerCount,
    setPlayerCount,
    dealerCount,
    setDealerCount,
    handleHit,
    handleStay,
    handleDouble,
    lockedBet,
    handleLockedBet,
    isHandComplete,
    isDealersTurn,
    isPlayerBusted,
    isDealerBusted,
    didDouble,
    startHand,
    handleBet,
    previousBet,
    winner,
    isBlackjack,
    clearLockedBet,
    isBothPlayerReady,
    isReady,
    allPlayers,
    isMyTurn
  } = props;
  const whichImages = (who, cards) => {
    return cards.map((card) => {
      let findImage;
      switch (card) {
        case "AH":
          findImage = AceOfH;
          break;
        case "2H":
          findImage = TwoOfH;
          break;
        case "3H":
          findImage = ThreeOfH;
          break;
        case "4H":
          findImage = FourOfH;
          break;
        case "5H":
          findImage = FiveOfH;
          break;
        case "6H":
          findImage = SixOfH;
          break;
        case "7H":
          findImage = SevenOfH;
          break;
        case "8H":
          findImage = EightOfH;
          break;
        case "9H":
          findImage = NineOfH;
          break;
        case "10H":
          findImage = TenOfH;
          break;
        case "JH":
          findImage = JackOfH;
          break;
        case "QH":
          findImage = QueenOfH;
          break;
        case "KH":
          findImage = KingOfH;
          break;
        case "AC":
          findImage = AceOfC;
          break;
        case "2C":
          findImage = TwoOfC;
          break;
        case "3C":
          findImage = ThreeOfC;
          break;
        case "4C":
          findImage = FourOfC;
          break;
        case "5C":
          findImage = FiveOfC;
          break;
        case "6C":
          findImage = SixOfC;
          break;
        case "7C":
          findImage = SevenOfC;
          break;
        case "8C":
          findImage = EightOfC;
          break;
        case "9C":
          findImage = NineOfC;
          break;
        case "10C":
          findImage = TenOfC;
          break;
        case "JC":
          findImage = JackOfC;
          break;
        case "QC":
          findImage = QueenOfC;
          break;
        case "KC":
          findImage = KingOfC;
          break;
        case "AD":
          findImage = AceOfD;
          break;
        case "2D":
          findImage = TwoOfD;
          break;
        case "3D":
          findImage = ThreeOfD;
          break;
        case "4D":
          findImage = FourOfD;
          break;
        case "5D":
          findImage = FiveOfD;
          break;
        case "6D":
          findImage = SixOfD;
          break;
        case "7D":
          findImage = SevenOfD;
          break;
        case "8D":
          findImage = EightOfD;
          break;
        case "9D":
          findImage = NineOfD;
          break;
        case "10D":
          findImage = TenOfD;
          break;
        case "JD":
          findImage = JackOfD;
          break;
        case "QD":
          findImage = QueenOfD;
          break;
        case "KD":
          findImage = KingOfD;
          break;
        case "AS":
          findImage = AceOfS;
          break;
        case "2S":
          findImage = TwoOfS;
          break;
        case "3S":
          findImage = ThreeOfS;
          break;
        case "4S":
          findImage = FourOfS;
          break;
        case "5S":
          findImage = FiveOfS;
          break;
        case "6S":
          findImage = SixOfS;
          break;
        case "7S":
          findImage = SevenOfS;
          break;
        case "8S":
          findImage = EightOfS;
          break;
        case "9S":
          findImage = NineOfS;
          break;
        case "10S":
          findImage = TenOfS;
          break;
        case "JS":
          findImage = JackOfS;
          break;
        case "QS":
          findImage = QueenOfS;
          break;
        case "KS":
          findImage = KingOfS;
          break;
        default:
          break;
      }
      if (who === "dealer" && parseInt(cards.indexOf(card)) === 1) {
        return (
          <img
            className="card-img"
            alt={card}
            src={isDealersTurn ? findImage : CardBack}
          ></img>
        );
      }
      return (
        <img
          className={
            didDouble && cards.indexOf(card) === 2 && who === "player"
              ? "sideways-double-card"
              : "card-img"
          }
          alt={card}
          src={findImage}
        ></img>
      );
    });
  };

  return (
    <div className="game-div">

      {!isBothPlayerReady && isReady && <h1>Wait for other player to join...</h1>}
      <div className="dealers-cards-div">
        <h1 className="count">
          {isDealersTurn ? dealerCount : null}
        </h1>
        {whichImages("dealer", dealersCards)}
      </div>
      <div className="players-area">

        {allPlayers.length === 2 && allPlayers.map(player => <Player {...props} playerName={player.username} playerStat={allPlayers.filter(p => p.username !== getLocalStorage('username'))[0]} />)}

      </div>
    </div>
  );
}
