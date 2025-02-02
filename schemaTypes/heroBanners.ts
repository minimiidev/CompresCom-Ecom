export default {
  name: "heroBanners",
  title: "Banner de portada",
  type: "document",
  fields: [
    { name: "name", title: "Nombre", type: "string" },
    {
      name: "banner",
      title: "Banner",
      type: "image",
      options: {
        hotspot: true, // Enable hotspot for cropping
      },
    },
    { name: "description", title: "Descripcion", type: "string" },
  ],
};
