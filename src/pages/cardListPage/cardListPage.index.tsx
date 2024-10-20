import { TCard } from "interfaces/cardList.interface";
import React, { useState } from "react";
import Card from "./components/Card";
import Modal from "@components/modal/modal.index";
import CardModal from "./components/CardModal";

type Props = {};

const example: TCard[] = [
    {
        id: 1,
        type: "Stage",
        name: "Test Card",
        set: "OP01",
        cardNumber: "001",
        archetypes: ["Seven Warlords of the Sea"],
        effect: "Test Effect",
        rarity: "C",
        cost: 0,
    },
    {
        id: 1,
        type: "Stage",
        name: "Test Card",
        set: "OP01",
        cardNumber: "001",
        archetypes: [],
        effect: "Test Effect",
        rarity: "C",
        cost: 0,
    },
    {
        id: 1,
        type: "Stage",
        name: "Test Card",
        set: "OP01",
        cardNumber: "001",
        archetypes: [],
        effect: "Test Effect",
        rarity: "C",
        cost: 0,
    },
];

const CardListPage = (props: Props) => {
    const [openCard, setOpenCard] = useState<TCard | null>(example[0]);
    return (
        <React.Fragment>
            <CardModal
                card={openCard}
                closeFunction={() => setOpenCard(null)}
            />
            <div className="grid grid-cols-4 gap-5 p-5">
                {example.map((c) => (
                    <Card card={c} openModal={(card) => setOpenCard(card)} />
                ))}
            </div>
        </React.Fragment>
    );
};

export default CardListPage;
