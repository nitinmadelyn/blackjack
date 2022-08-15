import React from "react";
import "../Assets/scss/main.css";
import BlankChip from "../Assets/images/blank-chip.png";
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
import { getLocalStorage } from "../Helper/Helper";

export default function Player(props) {
    const { randomizedDecks,
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
        playerName,
        isMyTurn,
        playerStat } = props;

    console.log('playerStat=', playerStat)


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
        <div className="player border-right">
            <p className="username">{playerName}</p>

            {playerName === getLocalStorage('username') ? (
                <>
                    <div style={{ float: "left" }}>
                        <div>
                            <div className="chip-or-message">
                                {(isReady &&
                                    lockedBet === 0 &&
                                    isBothPlayerReady &&
                                    isHandComplete &&
                                    !winner &&
                                    isMyTurn &&
                                    getLocalStorage('username') === playerName)
                                    ? <h3>Place your bet by clicking on the coin from bottom.</h3> : ''}
                                {lockedBet > 0 || !isHandComplete ? (
                                    <div className="empty-chip-container">
                                        <div className="locked-bet-amount">
                                            {isHandComplete ? lockedBet : previousBet}
                                        </div>
                                        <img
                                            className="locked-bet-img"
                                            onClick={clearLockedBet}
                                            src={BlankChip}
                                            alt=""
                                        ></img>
                                    </div>
                                ) : null}
                                <h4 className="result-message">
                                    {winner === "player" && isBlackjack
                                        ? `Blackjack! Player wins ${previousBet + previousBet * 1.5
                                        }`
                                        : winner === "player" && didDouble
                                            ? `Player doubles and wins ${previousBet * 4}`
                                            : winner === "player" && isDealerBusted
                                                ? `Dealer busted! Player wins ${previousBet * 2}`
                                                : winner === "dealer" && didDouble
                                                    ? `Player doubled and lost ${previousBet * 2}`
                                                    : winner === "dealer" && isBlackjack
                                                        ? `Dealer Blackjack. Player lost ${previousBet}`
                                                        : winner === "dealer" &&
                                                            isPlayerBusted &&
                                                            didDouble
                                                            ? `Player busted on double. Lost ${previousBet * 2}`
                                                            : winner === "dealer" && isPlayerBusted
                                                                ? `Player busted. Lost ${previousBet}`
                                                                : winner === "dealer"
                                                                    ? `Player lost ${previousBet}`
                                                                    : winner === "player"
                                                                        ? `Player wins ${previousBet * 2}`
                                                                        : winner === "push" && didDouble
                                                                            ? `Pushed back ${previousBet * 2}`
                                                                            : winner === "push"
                                                                                ? `Pushed back ${previousBet}`
                                                                                : null}
                                </h4>
                            </div>
                        </div>
                        <div>
                            <section className="gameplay-options">
                                {!isHandComplete ? (
                                    <>
                                        <button
                                            className="betting-option"
                                            id={
                                                !isDealersTurn && playerCount < 21
                                                    ? "ready-to-start"
                                                    : "not-ready"
                                            }
                                            onClick={handleHit}
                                        >
                                            Hit
                                        </button>
                                        <button
                                            className="betting-option"
                                            id={
                                                !isDealersTurn &&
                                                    playerCount <= 21 &&
                                                    !didDouble
                                                    ? "ready-to-start"
                                                    : "not-ready"
                                            }
                                            onClick={handleStay}
                                        >
                                            Stay
                                        </button>
                                        <button
                                            className="betting-option"
                                            id={
                                                !isDealersTurn &&
                                                    playersCards.length === 2 &&
                                                    chipCount >= previousBet
                                                    ? "ready-to-start"
                                                    : "not-ready"
                                            }
                                            onClick={handleDouble}
                                        >
                                            Double
                                        </button>
                                        {/* <button onClick={handleSplit}>Split</button> */}
                                    </>
                                ) : (
                                    <></>
                                )}
                            </section>
                        </div>
                    </div>
                    <div style={{ float: "right" }}>
                        <div className="players-cards-div">
                            {whichImages("player", playersCards)}
                            <h1 className="count">
                                {playerCount > 0 ? playerCount : null}
                            </h1>
                        </div>
                    </div>
                </>
            )
                :
                (
                    <>
                        <div className="chip-or-message">
                            {playerStat.betAmount > 0 ? (
                                <div className="empty-chip-container">
                                    <div className="locked-bet-amount">
                                        {playerStat.betAmount}
                                    </div>
                                    <img
                                        className="locked-bet-img"
                                        onClick={clearLockedBet}
                                        src={BlankChip}
                                        alt=""
                                    ></img>
                                </div>
                            ) : null}
                        </div>
                    </>
                )}
        </div>
    );
}