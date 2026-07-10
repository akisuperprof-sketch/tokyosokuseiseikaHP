export type ContentStatus = "confirmed" | "pending" | "hidden";

export type VerifiedContent<T> = {
  id?: string;
  value: T;
  status: ContentStatus;
  source?: string;
  sourceDate?: string;
  note?: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  status: "approved" | "placeholder";
  credit?: string;
};
