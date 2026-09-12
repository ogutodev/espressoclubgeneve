export type Locale = "fr" | "en" | "pt";
export type MenuCategory = "pizza" | "pasta" | "salades" | "desserts" | "drinks";

export type MenuItem = {
  name: string;
  price: number;
  category: MenuCategory;
  featured?: boolean;
  translations: Record<Locale, string>;
};

const item = (name: string, price: number, category: MenuCategory, fr: string, en: string, pt: string, featured = false): MenuItem => ({
  name, price, category, featured, translations: { fr, en, pt },
});

export const menuData: MenuItem[] = [
  item("Margherita",17,"pizza","Tomate, mozzarella, origan","Tomato, mozzarella, oregano","Tomate, mozzarella e orégano"),
  item("Rucola",20,"pizza","Tomate, mozzarella, roquette, Grana Padano, origan","Tomato, mozzarella, rocket, Grana Padano, oregano","Tomate, mozzarella, rúcula, Grana Padano e orégano"),
  item("Prosciutto",20,"pizza","Tomate, mozzarella, jambon d’épaule, origan","Tomato, mozzarella, shoulder ham, oregano","Tomate, mozzarella, presunto cozido e orégano"),
  item("Capricciosa",22,"pizza","Tomate, mozzarella, champignons, jambon d’épaule, œuf, origan","Tomato, mozzarella, mushrooms, shoulder ham, egg, oregano","Tomate, mozzarella, cogumelos, presunto cozido, ovo e orégano"),
  item("Au Thon",22,"pizza","Tomate, mozzarella, thon, oignon, origan","Tomato, mozzarella, tuna, onion, oregano","Tomate, mozzarella, atum, cebola e orégano"),
  item("Campo Dei Fiori",21,"pizza","Tomate, mozzarella, aubergines, courgettes, origan","Tomato, mozzarella, aubergine, courgette, oregano","Tomate, mozzarella, berinjela, abobrinha e orégano"),
  item("Tagada Tsoin Tsoin",23,"pizza","Tomate, mozzarella, aubergines, courgettes, oignon, sésame, pesto, origan","Tomato, mozzarella, aubergine, courgette, onion, sesame, pesto, oregano","Tomate, mozzarella, berinjela, abobrinha, cebola, gergelim, pesto e orégano"),
  item("Angelo",23,"pizza","Tomate, mozzarella, courgettes, salami piquant, pesto, origan","Tomato, mozzarella, courgette, spicy salami, pesto, oregano","Tomate, mozzarella, abobrinha, salame picante, pesto e orégano"),
  item("Super Nana",22,"pizza","Tomate, mozzarella, courgettes, jambon d’épaule, pesto, origan","Tomato, mozzarella, courgette, shoulder ham, pesto, oregano","Tomate, mozzarella, abobrinha, presunto cozido, pesto e orégano"),
  item("Dolce Vita",25,"pizza","Tomate, Caprice des Dieux, salami piquant, origan","Tomato, Caprice des Dieux, spicy salami, oregano","Tomate, Caprice des Dieux, salame picante e orégano",true),
  item("Come No?",29,"pizza","Tomate, Caprice des Dieux, courgettes, lardons, sésame, jambon cru, origan","Tomato, Caprice des Dieux, courgette, bacon, sesame, cured ham, oregano","Tomate, Caprice des Dieux, abobrinha, bacon, gergelim, presunto cru e orégano"),
  item("Giorgio",27,"pizza","Tomate, mozzarella, tomates fraîches, roquette, burrata, origan","Tomato, mozzarella, fresh tomatoes, rocket, burrata, oregano","Tomate, mozzarella, tomates frescos, rúcula, burrata e orégano",true),
  item("Giorgina",29,"pizza","Tomate, mozzarella, salami piquant, roquette, burrata, origan","Tomato, mozzarella, spicy salami, rocket, burrata, oregano","Tomate, mozzarella, salame picante, rúcula, burrata e orégano",true),
  item("Gioconda",29,"pizza","Tomate, mozzarella, bresaola, roquette, burrata, origan","Tomato, mozzarella, bresaola, rocket, burrata, oregano","Tomate, mozzarella, bresaola, rúcula, burrata e orégano",true),
  item("Pomodoro",16,"pasta","Sauce tomate, huile d’olive","Tomato sauce, olive oil","Molho de tomate e azeite"),
  item("À l’Arrabbiata",17,"pasta","Sauce tomate, huile d’olive, piments","Tomato sauce, olive oil, chilli","Molho de tomate, azeite e pimenta"),
  item("Al Pesto",21,"pasta","Huile d’olive, basilic, amandes, ail, Grana Padano","Olive oil, basil, almonds, garlic, Grana Padano","Azeite, manjericão, amêndoas, alho e Grana Padano"),
  item("Tartufo",22,"pasta","Huile aromatisée à la truffe, amandes toastées, basilic","Truffle-flavoured oil, toasted almonds, basil","Azeite aromatizado com trufas, amêndoas tostadas e manjericão"),
  item("Pescatore",23,"pasta","Sauce tomate, thon, anchois, olives noires","Tomato sauce, tuna, anchovies, black olives","Molho de tomate, atum, anchovas e azeitonas pretas"),
  item("Siciliana",22,"pasta","Sauce tomate, mascarpone, légèrement parfumée au curry","Tomato sauce, mascarpone, lightly scented with curry","Molho de tomate, mascarpone e um leve toque de curry"),
  item("Rosa Picante",25,"pasta","Siciliana, pesto, piments secs","Siciliana, pesto, dried chilli","Siciliana, pesto e pimenta seca"),
  item("Rosa Brava",27,"pasta","Siciliana, pesto, piments secs, salami piquant","Siciliana, pesto, dried chilli, spicy salami","Siciliana, pesto, pimenta seca e salame picante"),
  item("Carbonara",27,"pasta","Lardons, crème, champignons, jaune d’œuf","Bacon, cream, mushrooms, egg yolk","Bacon, creme, cogumelos e gema de ovo"),
  item("Verte",6,"salades","Salade verte, vinaigrette","Green salad, vinaigrette","Salada verde e vinagrete"),
  item("Mixte",7,"salades","Salade verte, tomate, maïs","Green salad, tomato, sweetcorn","Salada verde, tomate e milho"),
  item("Rucola",7,"salades","Roquette, Grana Padano","Rocket, Grana Padano","Rúcula e Grana Padano"),
  item("César Salade",16,"salades","Salade verte, croûtons à l’ail, anchois, Grana Padano","Green salad, garlic croutons, anchovies, Grana Padano","Salada verde, croutons de alho, anchovas e Grana Padano"),
  item("Parisienne",19,"salades","Salade verte, maïs, champignons de Paris, sésame toasté","Green salad, sweetcorn, button mushrooms, toasted sesame","Salada verde, milho, cogumelos Paris e gergelim tostado"),
  item("Portofino",18,"salades","Salade verte, tomates, olives noires, piment sec, Grana Padano","Green salad, tomatoes, black olives, dried chilli, Grana Padano","Salada verde, tomates, azeitonas pretas, pimenta seca e Grana Padano"),
  item("Caprese",19,"salades","Tomates, mozzarella, pesto","Tomatoes, mozzarella, pesto","Tomates, mozzarella e pesto"),
  item("Positano",23,"salades","Tomates, mozzarella, pesto, jambon cru, amandes, sésame toasté","Tomatoes, mozzarella, pesto, cured ham, almonds, toasted sesame","Tomates, mozzarella, pesto, presunto cru, amêndoas e gergelim tostado"),
  item("Athena",21,"salades","Salade verte, Caprice des Dieux, noisettes, amandes, noix de cajou, raisins secs","Green salad, Caprice des Dieux, hazelnuts, almonds, cashews, raisins","Salada verde, Caprice des Dieux, avelãs, amêndoas, castanhas de caju e uvas-passas"),
  item("La Burrata",23,"salades","Roquette, burrata Fior di Latte, artichauts, tomate","Rocket, Fior di Latte burrata, artichokes, tomato","Rúcula, burrata Fior di Latte, alcachofras e tomate"),
  item("La Reale",26,"salades","Roquette, burrata Fior di Latte, artichauts, tomate, jambon cru","Rocket, Fior di Latte burrata, artichokes, tomato, cured ham","Rúcula, burrata Fior di Latte, alcachofras, tomate e presunto cru"),
  item("Tiramisu classique",8,"desserts","Tiramisu classique","Classic tiramisu","Tiramisù clássico"),
  item("Moelleux au chocolat",8,"desserts","Moelleux au chocolat","Warm chocolate cake","Bolo cremoso de chocolate"),
];

export const categoryOrder: MenuCategory[] = ["pizza", "pasta", "salades", "desserts", "drinks"];