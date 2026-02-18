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
    cardDeck.splice(0, 1),
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

  let i = -1;

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
          position: "relative",
          border: "3px solid lightBlue",
          width: "100%",
          height: "99svh",
          overflow: "hidden",
        }}
      >
        {activeCards.map((card, i) => (
          <img
            id={card.name}
            src={"./data/images/" + card.imageName}
            className={cardStyle.simpleCards}
            style={{
              zIndex: activeCards.length - i,
              top: `${i * (25 - activeCards.length * 3)}%`, // Positive offset downward
              left: `${i * 4}%`,
              maxHeight: `${80 - activeCards.length * 5}vh`,
            }}
          />
        ))}
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
