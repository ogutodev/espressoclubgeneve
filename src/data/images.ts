import roomWide from "../assets/DSC03647.JPG.asset.json";
import roomBar from "../assets/DSC03653.JPG.asset.json";
import roomCurve from "../assets/DSC03658.JPG.asset.json";
import tableDetail from "../assets/DSC03662.JPG.asset.json";
import beerTap from "../assets/DSC03664.JPG.asset.json";
import wine from "../assets/DSC03665.JPG.asset.json";
import clock from "../assets/DSC03668.JPG.asset.json";
import cars from "../assets/DSC03673.JPG.asset.json";
import portraits from "../assets/DSC03674.JPG.asset.json";

export const images = {
  roomWide: roomWide.url,
  roomBar: roomBar.url,
  roomCurve: roomCurve.url,
  tableDetail: tableDetail.url,
  beerTap: beerTap.url,
  wine: wine.url,
  clock: clock.url,
  cars: cars.url,
  portraits: portraits.url,
};

export const galleryImages = [
  { src: images.roomWide, category: "atmosphere", alt: "La salle d’Espresso Club aux Pâquis" },
  { src: images.tableDetail, category: "food", alt: "Table dressée pour le dîner" },
  { src: images.beerTap, category: "drinks", alt: "Tireuse à bière au bar" },
  { src: images.roomCurve, category: "atmosphere", alt: "Le comptoir d’Espresso Club" },
  { src: images.wine, category: "drinks", alt: "Sélection de vins au bar" },
  { src: images.portraits, category: "people", alt: "Galerie de portraits dans la salle" },
  { src: images.roomBar, category: "atmosphere", alt: "Vue intérieure du bar" },
  { src: images.clock, category: "atmosphere", alt: "Horloge vintage d’Espresso Club" },
  { src: images.cars, category: "people", alt: "Photographies encadrées du décor" },
] as const;