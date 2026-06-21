// src/utils/sanity.js
import { createClient } from "@sanity/client";
import imageUrl from "@sanity/image-url";

export const client = createClient({
  projectId: "gjaiil2a", // Project ID sesuai screenshot akunmu kemarin
  dataset: "production",
  useCdn: true,
  apiVersion: "2026-06-16",
});

export const urlFor = (source) => imageUrl(client).image(source);
