export default {
  name: "phone",
  title: "Telefono",
  type: "document",
  fields: [
    {
      name: "brand",
      title: "Marca",
      type: "reference",
      to: [{ type: "brand" }],
    },
    {
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Imagen",
      type: "image",
    },
    {
      name: "price",
      title: "Precio",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "color",
      title: "Color",
      description: "Ej: Negro, Blanco, Azul",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "storage",
      title: "Almacenamiento",
      description: "Ej: 128, 256, 512, 1TB = 1",
      type: "array",
      of: [{ type: "number" }],
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
