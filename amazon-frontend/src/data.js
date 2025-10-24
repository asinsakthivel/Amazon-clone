// src/dealData.js

// Appliances
import appliance1 from './images/h-air.jpeg';
import appliance2 from './images/h-fridge.jpeg';
import appliance3 from './images/h-mixi.jpeg';
import appliance4 from './images/h-washingmechin.jpeg';

// Gaming
import home1 from './images/p-dual.jpeg';
import home2 from './images/p-goldps5.jpeg';
import home3 from './images/p-headset.jpeg';
import home4 from './images/p-ps5.jpeg';

// Home Essentials
import ps5_1 from './images/s-clock.jpeg';
import ps5_2 from './images/s-container.jpeg';
import ps5_3 from './images/s-floormat.jpeg';
import ps5_4 from './images/s-light.jpeg';

// TVs
import tv1 from "./images/tv-sony.jpeg";
import tv2 from "./images/tv-sam.jpeg";
import tv3 from "./images/tv-lg.jpeg";
import tv4 from "./images/tv-acer.jpeg";

// Headphones
import headphone1 from "./images/hp-boat.png";
import headphone2 from "./images/hp-bose.jpeg";
import headphone3 from "./images/hp-noise.jpeg";
import headphone4 from "./images/hp-philips.jpeg";

// Accessories
import access1 from "./images/o-cartool.jpeg";
import access2 from "./images/o-cleaning.jpeg";
import access3 from "./images/o-wallpaper.jpeg";
import access4 from "./images/o-bathroomaccessories.jpeg";

const dealData = [
  {
    title: "Appliances for Your Home | Up to 55% Off",
    category: "Appliances",
    images: [
      { id: 101, src: appliance1, caption: "Air Conditioner", price: 28999, originalPrice: 42000, details: "1.5 Ton Split AC with energy saving mode and fast cooling.", rating: 4.5, stock: 10, quantity: 1 },
      { id: 102, src: appliance2, caption: "Refrigerator", price: 19499, originalPrice: 32000, details: "Double door frost-free refrigerator with inverter technology.", rating: 4.4, stock: 8, quantity: 1 },
      { id: 103, src: appliance3, caption: "Mixer Grinder", price: 2499, originalPrice: 3799, details: "750W powerful motor, 3 jars, stainless steel blades.", rating: 4.2, stock: 15, quantity: 1 },
      { id: 104, src: appliance4, caption: "Washing Machine", price: 14999, originalPrice: 25000, details: "6.5 kg fully automatic top-load with smart wash technology.", rating: 4.3, stock: 7, quantity: 1 },
    ]
  },
  {
    title: "Top Deals in Gaming | Limited Time Offers",
    category: "Gaming",
    images: [
      { id: 201, src: home1, caption: "DualSense Controller", price: 5499, originalPrice: 7999, details: "Sony PS5 DualSense wireless controller with haptic feedback.", rating: 4.6, stock: 20, quantity: 1 },
      { id: 202, src: home2, caption: "Gold PS5", price: 52999, originalPrice: 65000, details: "Special Edition PS5 with gold-plated design and 1TB SSD.", rating: 4.8, stock: 5, quantity: 1 },
      { id: 203, src: home3, caption: "Gaming Headset", price: 2299, originalPrice: 4000, details: "Surround sound gaming headset with noise cancellation mic.", rating: 4.3, stock: 12, quantity: 1 },
      { id: 204, src: home4, caption: "PlayStation 5", price: 49999, originalPrice: 60000, details: "Next-gen PS5 console with ultra-fast SSD and 4K gaming support.", rating: 4.7, stock: 6, quantity: 1 },
    ]
  },
  {
    title: "Home Essentials | Deals Under ₹499",
    category: "Home Essentials",
    images: [
      { id: 301, src: ps5_1, caption: "Clock Decor", price: 299, originalPrice: 499, details: "Stylish wall clock with silent movement and modern design.", rating: 4.1, stock: 30, quantity: 1 },
      { id: 302, src: ps5_2, caption: "Storage Container", price: 399, originalPrice: 699, details: "Airtight plastic containers set for kitchen storage.", rating: 4.2, stock: 25, quantity: 1 },
      { id: 303, src: ps5_3, caption: "Floor Mat", price: 249, originalPrice: 399, details: "Non-slip floor mat, easy to wash, perfect for bathroom and kitchen.", rating: 4.0, stock: 40, quantity: 1 },
      { id: 304, src: ps5_4, caption: "Wall Light", price: 349, originalPrice: 599, details: "Decorative LED wall lamp, warm white light, easy to install.", rating: 4.1, stock: 35, quantity: 1 },
    ]
  },
  {
    title: "Smart TVs & Entertainment | Starting at ₹6,999",
    category: "TVs",
    images: [
      { id: 401, src: tv1, caption: "Sony TV", price: 22999, originalPrice: 34999, details: "Sony 40-inch Full HD Smart TV with HDR and voice assistant.", rating: 4.5, stock: 10, quantity: 1 },
      { id: 402, src: tv2, caption: "Samsung TV", price: 18999, originalPrice: 28000, details: "Samsung 43-inch 4K UHD Smart TV with crystal display.", rating: 4.4, stock: 8, quantity: 1 },
      { id: 403, src: tv3, caption: "LG Smart TV", price: 16499, originalPrice: 23000, details: "LG 32-inch HD Ready Smart TV with webOS and AI ThinQ.", rating: 4.3, stock: 12, quantity: 1 },
      { id: 404, src: tv4, caption: "Acer 4K TV", price: 12999, originalPrice: 18000, details: "Acer 32-inch 4K Ultra HD Smart TV with Dolby Audio.", rating: 4.2, stock: 7, quantity: 1 },
    ]
  },
  {
    title: "Under ₹499 | Home Improvement Deals",
    category: "Accessories",
    images: [
      { id: 501, src: access1, caption: "Car Tool", price: 199, originalPrice: 299, details: "Portable car repair toolkit with essential tools.", rating: 4.1, stock: 50, quantity: 1 },
      { id: 502, src: access2, caption: "Home Cleaning Kit", price: 299, originalPrice: 450, details: "Multi-purpose cleaning kit for household use.", rating: 4.2, stock: 40, quantity: 1 },
      { id: 503, src: access3, caption: "Wallpaper", price: 399, originalPrice: 599, details: "Self-adhesive waterproof wallpaper for easy home makeover.", rating: 4.0, stock: 30, quantity: 1 },
      { id: 504, src: access4, caption: "Bathroom Accessories", price: 349, originalPrice: 499, details: "Set of bathroom shelves and holders, stainless steel.", rating: 4.1, stock: 25, quantity: 1 },
    ]
  },
  {
    title: "Top Picks in Headphones & Audio Gear",
    category: "Headphones",
    images: [
      { id: 601, src: headphone1, caption: "boAt Rockerz", price: 1199, originalPrice: 2499, details: "boAt Rockerz wireless headphones with deep bass and 8h battery.", rating: 4.2, stock: 30, quantity: 1 },
      { id: 602, src: headphone2, caption: "Bose QC45", price: 14999, originalPrice: 20000, details: "Bose QuietComfort 45 with active noise cancellation.", rating: 4.6, stock: 10, quantity: 1 },
      { id: 603, src: headphone3, caption: "Noise Wireless", price: 1799, originalPrice: 3200, details: "Noise wireless Bluetooth headset with dual pairing.", rating: 4.3, stock: 25, quantity: 1 },
      { id: 604, src: headphone4, caption: "Philips Headphones", price: 999, originalPrice: 1499, details: "Philips wired headphones with powerful sound and comfort fit.", rating: 4.1, stock: 20, quantity: 1 },
    ]
  }
];

export default dealData;
