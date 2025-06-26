export interface Item {
  id: string;
  name: string;
  createdAt: string;
}

export interface CardType {
    item: Item;
    onDelete:()=>void
}