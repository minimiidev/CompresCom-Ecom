import type { PortableTextBlock } from "@portabletext/types";
import groq from "groq";
import { sanityClient } from "sanity:client";

export const getAllPhones = async (): Promise<Phone[]> => {
  return await sanityClient.fetch(
    groq`*[_type == "phone"]
    {
     "images": image[].asset -> url,
      "slug": slug.current,
      name,
      price,
    "brand": brand -> name,
    storage
    }`
  );
};

export const getPhonesByBrand = async (slug: string): Promise<Phone[]> => {
  return await sanityClient.fetch(
    groq`*[_type == "phone" && brand -> name == $slug]
    {
      "images": image[].asset -> url,
      "slug": slug.current,
      color,
      name,
      price,
    "brand": brand -> name,
    storage
    }`,
    {
      slug,
    }
  );
};
export const getAccesoriesByBrand = async (slug: string): Promise<Phone[]> => {
  return await sanityClient.fetch(
    groq`*[_type == "accesory" && brand -> name == $slug]
    {
      "images": image[].asset -> url,
      "slug": slug.current,
      color,
      name,
      price,
    "brand": brand -> name,
    storage
    }`,
    {
      slug,
    }
  );
};

export const getPhone = async (slug: string): Promise<Phone> => {
  return await sanityClient.fetch(
    groq`*[_type == "phone" && slug.current == $slug][0]
    {
      "images": image[].asset -> url,
      "slug": slug.current,
      color,
      name,
      price,
    "brand": brand -> name,
    storage
    }`,
    {
      slug,
    }
  );
};

export const getAllComputers = async (): Promise<Computer[]> => {
  return await sanityClient.fetch(
    groq`*[_type == "computer" ]
    {
      "images": image[].asset -> url,
      "slug": slug.current,
      name,
      price,
    "brand": brand -> name,
    storage
    }`
  );
};

export const getComputer = async (slug: string): Promise<Computer> => {
  return await sanityClient.fetch(
    groq`*[_type == "computer" && slug.current == $slug ][0]
    {
      "images": image[].asset -> url,
      "slug": slug.current,
      color,
      name,
      price,
    "brand": brand -> name,
    storage
    }`,
    {
      slug,
    }
  );
};
export const getAllAccesories = async (): Promise<Accesory[]> => {
  return await sanityClient.fetch(
    groq`*[_type == "accesory" ]
    {
      "images": image[].asset -> url,
      "slug": slug.current,
      name,
      "type": type -> type,
      price,
    "brand": brand -> name,
    storage
    }`
  );
};

export const getAccesoriesByType = async (type: string): Promise<Accesory> => {
  return await sanityClient.fetch(
    groq`*[_type == "accesory" && type -> type == $type]
    {
      "images": image[].asset -> url,
      "slug": slug.current,
      color,
      name,
      "type": type -> type,
      price,
    "brand": brand -> name,
    storage
    }`,
    {
      type,
    }
  );
};
export const getAccesoriesBySlug = async (slug: string): Promise<Accesory> => {
  return await sanityClient.fetch(
    groq`*[_type == "accesory" && slug.current == $slug][0]
    {
      "images": image[].asset -> url,
      "slug": slug.current,
      color,
      name,
      "type": type -> type,
      price,
    "brand": brand -> name,
    storage
    }`,
    {
      slug,
    }
  );
};

export interface Phone {
  brand?: string;
  color?: [];
  images: string[];
  name?: string;
  price?: number;
  slug?: string;
  storage: number[];
}

export interface Computer {
  brand: string;
  color: string;
  cpu?: string;
  description?: PortableTextBlock[];
  images: string[];
  name?: string;
  price?: number;
  ram?: number;
  slug?: string;
  storage?: number;
}

export interface Accesory {
  brand?: string;
  color?: [];
  description?: PortableTextBlock[];
  images: string[];
  name?: string;
  price?: number;
  slug?: string;
  storage?: number;
  type?: string;
}
