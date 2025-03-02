export default {
  name: "computer",
  title: "Computadoras",
  type: "document",
  fields: [
    {
      name: "brand",
      title: "Marca",
      type: "reference",
      to: [{ type: "brand" }],
      validation: (Rule: any) => Rule.required(),
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
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule: any) => Rule.required(),
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
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "storage",
      title: "Almacenamiento",
      description: "Ej: 128, 256, 512, 1TB = 1",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "cpu",
      title: "Procesador",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "ram",
      title: "RAM",
      description: "Ej: 128, 256, 512, 1TB = 1",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Descripcion",
      type: "blockContent",
      description: "Descripcion del producto",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
