import roomWide from "../assets/DSC03647.JPG.asset.json";
import roomBar from "../assets/DSC03653.JPG.asset.json";
import roomCurve from "../assets/DSC03658.JPG.asset.json";
import tableDetail from "../assets/DSC03662.JPG.asset.json";
import beerTap from "../assets/DSC03664.JPG.asset.json";
import wine from "../assets/DSC03665.JPG.asset.json";
import clock from "../assets/DSC03668.JPG.asset.json";
import cars from "../assets/DSC03673.JPG.asset.json";
import portraits from "../assets/DSC03674.JPG.asset.json";
import pizzaEditorial from "../assets/pizza-editorial.jpg";
import drinksEditorial from "../assets/drinks-editorial.jpg";
import goodTimesEditorial from "../assets/good-times-editorial.jpg";
import pizzaReal01 from "../assets/espresso-pizza-01.webp.asset.json";
import pizzaReal02 from "../assets/espresso-pizza-02.webp.asset.json";
import pizzaReal03 from "../assets/espresso-pizza-03.webp.asset.json";
import pizzaReal04 from "../assets/espresso-pizza-04.webp.asset.json";
import pizzaReal05 from "../assets/espresso-pizza-05.webp.asset.json";
import pizzaReal06 from "../assets/espresso-pizza-06.webp.asset.json";

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
  pizza: pizzaEditorial,
  drinks: drinksEditorial,
  goodTimes: goodTimesEditorial,
};

export const realPizzaImages = [
  pizzaReal03.url,
  pizzaReal05.url,
  pizzaReal02.url,
  pizzaReal04.url,
  pizzaReal06.url,
  pizzaReal01.url,
] as const;

export const galleryImages = [
  ...realPizzaImages.map((src) => ({ src, category: "pizza" as const })),
  { src: images.goodTimes, category: "people" as const },
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