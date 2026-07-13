import { ImageAsset } from "./types";

export function canDisplayImage(image?: ImageAsset): image is ImageAsset {
  if (!image) return false;

  return (
    image.status === "confirmed" &&
    (image.permissionStatus === "confirmed" || image.permissionStatus === "not-required")
  );
}
