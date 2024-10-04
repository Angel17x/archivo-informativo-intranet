import { Etiqueta } from "./IItem";

export interface ICardItem {
  id: string;
  fileUrl: string;
  imageUrl?: string;
  title: string;
  description: string;
  timestamp: string;
  tags: Etiqueta[];
}
