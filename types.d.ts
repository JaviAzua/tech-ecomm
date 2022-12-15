export interface Product {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  description: string;
  image: Image[];
  name: string;
  price: number;
  slug: Slug;
  type: string;
}

export interface Image {
  _key: string;
  _type: string;
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: string;
}

export interface Slug {
  _type: string;
  current: string;
}

export interface BannerData {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  buttonText: string;
  desc: string;
  discount: string;
  image: Image;
  largeText1: string;
  midText: string;
  product: string;
  smallText: string;
}

export interface Image {
  _type: string;
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: string;
}
