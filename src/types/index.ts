export interface ICard {
    _id: string,
    description: string,
    image: string,
    title: string,
    category: string,
    price: number
}

export interface IForm {
    payment: string,
    email: string,
    phone: string,
    address: string,
    total: number,
    items: ICard[]
}

export interface ICardsData {
    cards: ICard[];
    preview: string | null;
    getCard(cardId: string): ICard; 
}

export interface IBascetData {
    addCard(card: ICard): void;
    deleteCard(cardId: string): void;
    // updateList(list: ICard[]): void;
    clearBuscket(data: Record<keyof TCardBascet, string>): void;
    getList(): ICard[];
}

export interface IUserData {
    setUserInfo(): TPayment;
    setUserContacts(): TContacts;
    clearData(): void;
}

export type TCardBascet = Pick<ICard, 'title' | 'price'>;

export type TPayment = Pick<IForm, 'payment' | 'address'>;

export type TContacts = Pick<IForm, 'email' | 'phone'>;

export type TPurchase = Pick<IForm, 'total'>;

