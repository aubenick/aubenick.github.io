import { Button } from "@fluentui/react-components";
import { simpleCardStyle, basicButton } from "../styles";
import { useState } from "react";
import { PlanarCard } from "../types";

interface SimpleAppProps {
  deck: PlanarCard[];
}

export default function SimpleApp({ deck }: SimpleAppProps) {
  const cardStyle = simpleCardStyle();
  const buttonStyle = basicButton();
  console.log(deck.length);
  const [cardDeck, setCardDeck] = useState<PlanarCard[]>(deck);
  const [activeCards, setActiveCard] = useState<PlanarCard[]>(
    cardDeck.splice(0, 2),
  );

  function onPlaneswalk() {
    const newDeck = cardDeck.concat(activeCards);
    const newActive = newDeck.splice(0, 1);
    setCardDeck(newDeck);
    setActiveCard(newActive);
  }

  console.log(cardDeck);
  console.log("next: " + cardDeck[0].name);
  console.log("last: " + cardDeck[cardDeck.length - 1].name);

  let zIndex = activeCards.length;

  return (
    <div
      style={{
        border: "3px solid hotPink",
        display: "flex",
        alignItems: "center",
        height: "99svh",
        width: "99svw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {activeCards.map(
          (card) => (
            zIndex--,
            console.log(zIndex),
            (
              <img
                id={card.name}
                src={"./data/images/" + card.imageName}
                className={cardStyle.singleImage}
                style={{
                  zIndex: zIndex,
                  top: -800 + (activeCards.length - zIndex) * 200,
                  left: (activeCards.length - zIndex) * 25,
                }}
              />
            )
          ),
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
          //height: "100vh",
        }}
      >
        <Button
          className={buttonStyle.buttonStyle}
          style={{
            backgroundImage: "url(./data/planeswalker.png)",
            backgroundColor: "grey",
            backgroundSize: "cover",
          }}
          onClick={onPlaneswalk}
        ></Button>
        {activeCards.filter((card) => card.specialActions).length > 0 && (
          <Button
            className={buttonStyle.buttonStyle}
            style={{
              border: "3px solid hotPink",
              backgroundColor: "pink",
            }}
          >
            Special Actions
          </Button>
        )}
      </div>
    </div>
  );
}
