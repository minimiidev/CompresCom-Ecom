// schemas/brand.js
export default {
  name: "brand",
  title: "Marca",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre de la marca*",
      type: "string",
      description: "Ej: Samsung, Apple, Xiaomi",
      validation: (Rule: any) => Rule.required(), // Obligatorio y único
    },
    {
      name: "icon",
      title: "Ícono de la marca*",
      type: "image",
      description: "Sube el ícono o logo de la marca",
      options: {
        hotspot: true, // Permite recortar la imagen
        accept: "image/png, image/jpeg, image/svg+xml", // Formatos permitidos
      },
      validation: (Rule: any) => Rule.required(), // Obligatorio
    },
  ],
  // Previsualización en el listado de Sanity
  preview: {
    select: {
      title: "name",
      media: "icon", // Muestra el ícono junto al nombre
    },
  },
};
