import roomWide from "../assets/DSC03647.JPG.asset.json";
import roomBar from "../assets/DSC03653.JPG.asset.json";
import roomCurve from "../assets/DSC03658.JPG.asset.json";
import tableDetail from "../assets/DSC03662.JPG.asset.json";
import beerTap from "../assets/DSC03664.JPG.asset.json";
import wine from "../assets/DSC03665.JPG.asset.json";
import clock from "../assets/DSC03668.JPG.asset.json";
import cars from "../assets/DSC03673.JPG.asset.json";
import portraits from "../assets/DSC03674.JPG.asset.json";
import drinksEditorial from "../assets/drinks-editorial.jpg";

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