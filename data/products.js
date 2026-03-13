// ── Data ──────────────────────────────────────────────────────────────────────
const products = [
  {
     name: "iPhone 13 Pro", category: "Phones",
    price: 2800, originalPrice: 4200, condition: "Like New",
    image: "/icons/iphone.jpg", badge: "Hot Deal",
    specs: ["256GB", "Sierra Blue", "Battery 91%"], inStock: 3,
  },
  {
     name: "MacBook Pro M1", category: "Laptops",
    price: 5500, originalPrice: 8900, condition: "Good",
    image: "/icons/macbook1.jpg", badge: "Popular",
    specs: ["8GB RAM", "256GB SSD", "Space Grey"], inStock: 2,
  },
  {
     name: "Sony WH-1000XM5", category: "Audio",
    price: 950, originalPrice: 1800, condition: "Like New",
    image: "/icons/sony-headset.jpg",
    specs: ["Noise Cancelling", "30hr Battery", "Black"], inStock: 5,
  },
  {
     name: "Samsung Galaxy S22", category: "Phones",
    price: 1900, originalPrice: 3200, condition: "Good",
    image: "/icons/samsung.png", badge: "Low Stock",
    specs: ["128GB", "Phantom Black", "Battery 88%"], inStock: 1,
  },
  {
     name: "Canon EOS R50", category: "Cameras",
    price: 3400, originalPrice: 5200, condition: "Like New",
    image: "/icons/camera.jpg",
    specs: ["24.2MP", "4K Video", "White"], inStock: 2,
  },
  {
     name: "PlayStation 5", category: "Gaming",
    price: 3800, originalPrice: 5500, condition: "Good",
    image: "/icons/ps5.jpg", badge: "Rare Find",
    specs: ["825GB SSD", "Disc Edition", "White"], inStock: 1,
  },
  {
     name: "iPad Air 5th Gen", category: "Tablets",
    price: 2100, originalPrice: 3400, condition: "Like New",
    image: "/icons/ipad.jpg",
    specs: ["64GB", "Wi-Fi", "Starlight"], inStock: 4,
  },
  {
     name: "Apple Watch Series 8", category: "Wearables",
    price: 1400, originalPrice: 2300, condition: "Like New",
    image: "/icons/apple-watch.webp",
    specs: ["45mm", "GPS", "Midnight"], inStock: 3,
  },
];


module.exports = products;