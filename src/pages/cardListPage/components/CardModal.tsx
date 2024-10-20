import Modal from "@components/modal/modal.index";
import { TCard } from "@interfaces/cardList.interface";
import React from "react";

const imageUrl =
    "https://deckbuilder.egmanevents.com/card_images/optcg/ST02-001.webp";

const CardModal = ({
    card,
    closeFunction,
}: {
    card: TCard | null;
    closeFunction: () => void;
}) => {
    if (!card) return null;
    return (
        <Modal open={!!card} closeFunction={closeFunction}>
            <div className="grid grid-cols-2 min-h-[20vh]">
                <div className="">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="p-5 flex flex-col gap-4">
                    <h1>
                        {card.set}-{card.cardNumber}
                    </h1>
                    <h4>{card.name}</h4>
                    <div className="flex gap-4">
                        <h5>{card.rarity}</h5>
                        <h4>{card.type}</h4>
                    </div>
                    <h4>{card.archetypes.join(", ")}</h4>
                </div>
            </div>
        </Modal>
    );
};

export default CardModal;
