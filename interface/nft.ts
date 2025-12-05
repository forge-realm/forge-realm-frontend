export interface Metadata {
  animation_url: string;
  attributes: Array<Record<string, any>>;
  background_color: string;
  description: string;
  external_url: string;
  image: string;
  name: string;
  tokenId: string
  uri: string;
  youtube_url: string;
};

export interface CardProp {
  name: string,
  collection?: string,
  owner: string,
  price: number | string
  image: string
}