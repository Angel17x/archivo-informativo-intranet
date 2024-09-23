export interface IItem {
  Categoria: Category[];
  Etiquetas: Etiqueta[];
  Title?: string;
  CanvasContent1: string;
  BannerImageUrl: BannerImageUrl;
  Description?: string;
  Created: string;
  FileRef: string;
}

export interface Category {
  Title: string;
}

export interface Etiqueta {
  Title: string;
}

export interface BannerImageUrl {
  Description?: string;
  Url?: string;
}
