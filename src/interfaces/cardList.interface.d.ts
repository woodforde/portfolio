import {
    cardArchetypes,
    cardRarities,
    cardTypes,
} from "constants/cardList.constants";

export type TCardType = (typeof cardTypes)[number];
export type TCardArchetype = (typeof cardArchetypes)[number];
export type TCardRarity = (typeof cardRarities)[number];
export type TCardAttribute = (typeof cardTypes)[number];

export interface ICard {
    id: number;
    type: TCardType;
    name: string;
    set: string;
    cardNumber: string;
    archetypes: TCardArchetype[];
    effect: string;
    rarity: TCardRarity;
}

export interface ICharacter extends ICard {
    type: "Character";
    counter: number;
    power: number;
    cost: number;
    attribute: TCardAttribute[];
}
export interface ILeader extends ICard {
    type: "Leader";
    life: number;
    power: number;
    attribute: TCardAttribute[];
}
export interface IEvent extends ICard {
    type: "Event";
    cost: number;
}
export interface IStage extends ICard {
    type: "Stage";
    cost: number;
}

export type TCard = ICharacter | ILeader | IEvent | IStage;

export interface ICardFilters {
    type: string[];
    colour: string[];
    cost: number[];
    rarity: string;
}
