// schemas/brand.js
export default {
  name: "accesoryType",
  title: "Tipo de Accesorio",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Tipo de Accesorio",
      type: "string",
      description: "Ej: Reloj, Cargador, Auriculares",
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
      //   validation: (Rule: any) => Rule.required(), // Obligatorio
    },
  ],
  // Previsualización en el listado de Sanity
  preview: {
    select: {
      title: "type",
      media: "icon", // Muestra el ícono junto al nombre
    },
  },
};
