import drinksEditorial from "../assets/drinks-editorial.jpg";

// Original photos live in public/images so every host (Lovable or Node/Infomaniak) serves them.
export const images = {
  roomWide: "/images/DSC03647.JPG",
  roomBar: "/images/DSC03653.JPG",
  roomCurve: "/images/DSC03658.JPG",
  tableDetail: "/images/DSC03662.JPG",
  beerTap: "/images/DSC03664.JPG",
  wine: "/images/DSC03665.JPG",
  clock: "/images/DSC03668.JPG",
  cars: "/images/DSC03673.JPG",
  portraits: "/images/DSC03674.JPG",
  drinks: drinksEditorial,
};
export const galleryImages = [
  { src: images.drinks, category: "drinks" as const },
  { src: images.roomWide, category: "atmosphere" as const },
  { src: images.tableDetail, category: "food" as const },
  { src: images.beerTap, category: "drinks" as const },
  { src: images.roomCurve, category: "atmosphere" as const },
  { src: images.wine, category: "drinks" as const },
  { src: images.portraits, category: "people" as const },
  { src: images.roomBar, category: "atmosphere" as const },
  { src: images.clock, category: "atmosphere" as const },
  { src: images.cars, category: "atmosphere" as const },
] as const;