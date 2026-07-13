export type ContentStatus = "confirmed" | "pending" | "placeholder" | "hidden";

export type VerifiedContent<T> = {
  id?: string;
  value: T;
  status: ContentStatus;
  source?: string;
  sourceDate?: string;
  note?: string;
};

export type ImagePermissionStatus = "confirmed" | "pending" | "not-required";

export type ImageAsset = {
  src: string;
  alt: string;
  status: ContentStatus;
  permissionStatus: ImagePermissionStatus;
  source?: "company" | "ai-generated" | "stock" | string;
  providedBy?: string;
  providedAt?: string;
  permissionNote?: string;
  credit?: string;
};
