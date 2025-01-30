import type { PortableTextBlock } from "@portabletext/types";
// import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";
import { sanityClient } from "sanity:client";

// export async function getPhones(): Promise<Phone[]> {
//   return await sanityClient.fetch(groq`*[_type == "phone" ]
//     {
//     "brand": brand -> name,
//     "brandIcon": brand -> url,
//       name,
//       "slug": slug.current,
//       "imgSrc": image.asset -> url,
//       price,
//     storage
//     }`);
// }

// export async function getPost(slug: string): Promise<Post> {
//   return await sanityClient.fetch(
//     groq`*[_type == "post" && slug.current == $slug][0]`,
//     {
//       slug,
//     }
//   );
// }

export interface Phone {
  brand?: {
    _type?: "reference";
    _ref?: string;
  };
  brandIcon?: {
    _type?: "reference";
    _ref?: string;
  };
  name?: string;
  slug?: string;
  imgSrc?: string;
  price?: number;
  storage?: string;
}
