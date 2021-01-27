require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Omakase', sortOrder: 10},
    {name: 'Omiyage', sortOrder: 20},
    {name: 'Dessert', sortOrder: 30},
    {name: 'Sake', sortOrder: 40},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'OMAKASE(for 2 People)', description: `16 pieces of Sushi (8 kinds of sushi pieces per person): Toro, Chu-toro, Botan sweet shrimp with crispy shrimp head, Hokkaido scallop with crystalized egg yolk, Japanese Tai sea bream with Sakura flower, Japanese Hamachi yellow tail with Yuzu Kosho Daikon radish, King Salmon with Oboro Konbu kelp and the chef's choice maki (Unakyu BBQ eel with Japanese cucumber and Shiso leaf roll or Toro-taku fatty tuna with pickled Daikon roll)`, 
    category: categories[0], price: 260.00},
    {name: 'Nigiri-zushi Petite OMAKASE(for 2 People)', description: `16 pieces of Sushi (8 kinds of sushi pieces per person):  Toro, Chu-toro, Botan sweet shrimp with crispy shrimp head, Hokkaido scallop with crystalized egg yolk, Japanese Tai sea bream with Sakura flower, Japanese Hamachi yellow tail with Yuzu Kosho Daikon radish, King Salmon with Oboro Konbu kelp and the chef's choice maki (Unakyu BBQ eel with Japanese cucumber and Shiso leaf roll or Toro-taku fatty tuna with pickled Daikon roll)`, 
    category: categories[0], price: 260.00},
    {name: 'Bara Zushi', description: `(Limited Quantity) Chirashi style sushi, including Kanpachi, Hamachi, Tai sea bream, King salmon with Ikura caviar, Dashi egg omelette, braised Kanpyo squash and Shiitake Mushroom with Yuzu Umami sushi rice`, 
    category: categories[1], price: 36.00},
    {name: 'Chirashi Zushi with Omakase 12 kinds', description: `12 kinds of chef's choice sashimi over the Umami sushi rice. (Two kinds of blue-fin tuna, Hokkaido scallop, Uni, Ikura, Shrimp, Anago eel, Kanpachi and four more kinds of seasonal fish)`, 
    category: categories[1], price: 68.00},
    {name: 'Kyoto Uji Matcha Panna Cotta', description: 'Kyoto Uji Matcha Panna Cotta comes with Kuri Chestnuts compote, chestnuts cream, Hokkaido Azuki Bean and Gold Flake from Kanazawa',
    category: categories[2], price: 12.00},
    {name: 'Dassai 39 (Sake) Half Bottle 300ml', description: 'Junmai Daiginjo, 300ml, from Yamaguchi. Fragrant, clean, taste of rice, long finish. One of the most recognized sake in Japan.',
    category: categories[3], price: 25.00},
    {name: 'Yukimanman "Snow Country" (Sake)', description: 'Daiginjo, 720ml, from Yamagata. 5 year aged, premiums sake. Well rounded, full body, super smoot',
    category: categories[3], price: 150.00},
  ]);

  console.log(items)

  process.exit();

})();