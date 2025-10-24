import dress1 from './images/side-dress.jpeg';
import dress2 from './images/side-dress1.jpeg';
import dress3 from './images/side-dress2.jpeg';
import dress4 from './images/side-dress3.jpeg';
import dress5 from './images/side-dress4.jpeg';
import video1 from './images/video.mp4';

const productData = [
  {
    id: 1,
    title: "Women Navy Striped Casual Dress",
    price: "1249",           // numeric string for DB
    originalPrice: "2799",   // numeric string
    image: dress1,
    video: video1,
    details:
      "Elegant navy striped casual dress made from breathable cotton, perfect for daily wear and outings.",
  },
  {
    id: 2,
    title: "Women's Gown Stitching Services",
    price: "1099",
    originalPrice: "1599",
    image: dress2,
    details:
      "Professional gown stitching services, ensuring a perfect fit for any occasion.",
  },
  {
    id: 3,
    title: "Black Designer Gown with Dupatta",
    price: "999",
    originalPrice: "1500",
    image: dress3,
    details:
      "Stylish black designer gown paired with an elegant dupatta, ideal for festive and party events.",
  },
  {
    id: 4,
    title: "Western Era Women Fit",
    price: "999",
    originalPrice: "1500",
    image: dress4,
    details:
      "Trendy western fit dress with a modern cut, providing comfort and style for casual wear.",
  },
  {
    id: 5,
    title: "Women Regular Fit",
    price: "999",
    originalPrice: "1500",
    image: dress5,
    details:
      "Classic regular fit dress designed for everyday use, offering both comfort and fashionable appearance.",
  },
];

export default productData;
