export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: string[];
  images: string[]; // Empty strings represent placeholders
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Ático de Diseño en Salamanca",
    location: "Salamanca, Madrid",
    price: 1250000,
    size: 180,
    bedrooms: 3,
    bathrooms: 2,
    description: "Espectacular ático con terraza panorámica en una de las zonas más exclusivas de Madrid. Acabados de primera calidad, domótica integrada y vistas incomparables a la ciudad.",
    features: ["Terraza panorámica", "Domótica", "Parking privado", "Trastero", "Portero 24h", "Gimnasio"],
    images: ["", "", "", "", "", ""],
  },
  {
    id: "2",
    title: "Loft Industrial en Chamberí",
    location: "Chamberí, Madrid",
    price: 890000,
    size: 145,
    bedrooms: 2,
    bathrooms: 2,
    description: "Loft de diseño industrial con techos de doble altura y espacios diáfanos. Ubicado en un edificio rehabilitado con carácter único.",
    features: ["Techos altos", "Espacios diáfanos", "Cocina abierta", "Suelos originales", "Luminosidad"],
    images: ["", "", "", "", "", "", ""],
  },
  {
    id: "3",
    title: "Piso Reformado en Malasaña",
    location: "Malasaña, Madrid",
    price: 650000,
    size: 95,
    bedrooms: 2,
    bathrooms: 1,
    description: "Piso completamente reformado en el corazón de Malasaña. Diseño contemporáneo que respeta elementos originales del edificio.",
    features: ["Reformado", "Balcón", "Calefacción central", "Ascensor", "Zona prime"],
    images: ["", "", "", "", ""],
  },
  {
    id: "4",
    title: "Apartamento con Jardín Privado",
    location: "El Viso, Madrid",
    price: 1850000,
    size: 220,
    bedrooms: 4,
    bathrooms: 3,
    description: "Exclusivo apartamento en planta baja con acceso directo a jardín privado de 100m². Perfecto para familias que buscan tranquilidad en el centro.",
    features: ["Jardín privado", "4 dormitorios", "Suite principal", "Cocina de autor", "Seguridad 24h"],
    images: ["", "", "", "", "", "", "", ""],
  },
  {
    id: "5",
    title: "Estudio de Lujo en Gran Vía",
    location: "Centro, Madrid",
    price: 420000,
    size: 55,
    bedrooms: 1,
    bathrooms: 1,
    description: "Estudio completamente equipado en edificio emblemático de Gran Vía. Ideal como inversión o primera vivienda con ubicación inmejorable.",
    features: ["Ubicación céntrica", "Totalmente equipado", "Vistas a Gran Vía", "Portero", "Histórico"],
    images: ["", "", "", "", "", ""],
  },
  {
    id: "6",
    title: "Dúplex Contemporáneo en Retiro",
    location: "Retiro, Madrid",
    price: 980000,
    size: 165,
    bedrooms: 3,
    bathrooms: 2,
    description: "Dúplex de nueva construcción junto al Parque del Retiro. Diseño vanguardista con materiales sostenibles y eficiencia energética A.",
    features: ["Nueva construcción", "Eficiencia A", "Terraza", "Junto al Retiro", "Parking", "Trastero"],
    images: ["", "", "", "", "", "", ""],
  },
];

export const locations = [...new Set(properties.map(p => p.location.split(", ")[0]))];

export const priceRanges = [
  { label: "Hasta 500.000€", min: 0, max: 500000 },
  { label: "500.000€ - 1.000.000€", min: 500000, max: 1000000 },
  { label: "1.000.000€ - 1.500.000€", min: 1000000, max: 1500000 },
  { label: "Más de 1.500.000€", min: 1500000, max: Infinity },
];

export const sizeRanges = [
  { label: "Hasta 80m²", min: 0, max: 80 },
  { label: "80m² - 150m²", min: 80, max: 150 },
  { label: "150m² - 200m²", min: 150, max: 200 },
  { label: "Más de 200m²", min: 200, max: Infinity },
];
