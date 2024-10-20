import { TCard } from "interfaces/cardList.interface";
import React from "react";

const imageUrl =
    "https://deckbuilder.egmanevents.com/card_images/optcg/ST02-001.webp";

const Card = ({
    card,
    openModal,
}: {
    card: TCard;
    openModal: (card: TCard) => void;
}) => {
    return (
        <div
            className="rounded-lg overflow-hidden group"
            onClick={() => openModal(card)}
        >
            <img src={imageUrl} alt={`${card.set}-${card.cardNumber}`} />
        </div>
    );
};

export default Card;
