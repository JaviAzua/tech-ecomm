export interface Product {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  description: string;
  image: SanityImageSource[];
  name: string;
  price: number;
  slug: Slug;
  type: string;
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
  image: SanityImageSource;
  largeText1: string;
  midText: string;
  product: string;
  smallText: string;
}
