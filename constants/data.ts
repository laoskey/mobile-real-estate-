import icons from "./icons";
import images from "./images";

export const cards = [
  {
    title: "Card 1",
    location: "Location 1",
    price: "$100",
    rating: 4.8,
    category: "house",
    image: images.newYork,
  },
  {
    title: "Card 2",
    location: "Location 2",
    price: "$200",
    rating: 3,
    category: "house",
    image: images.japan,
  },
  {
    title: "Card 3",
    location: "Location 3",
    price: "$300",
    rating: 2,
    category: "flat",
    image: images.newYork,
  },
  {
    title: "Card 4",
    location: "Location 4",
    price: "$400",
    rating: 5,
    category: "villa",
    image: images.japan,
  },
];

export const fakeproperties = [
  {
    image:
      "https://www.bing.com/th/id/OIP.coDKm0m4Jpm_hF6V0xhGaQHaF7?w=215&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    rating: 2.99,
    name: "Ahamade",
    address: "No22.Ahakeshi.Ukland",
    price: 998852,
    id: "1",
  },
  {
    image:
      "https://www.bing.com/th/id/OIP.WSsCa75YhSn91wK4_dc40wAAAA?w=250&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    rating: 4.99,
    name: "LocustAhamade",
    address: "No22.Ahakeshi.Ukland",
    price: 9952,
    id: "2",
  },
  {
    image:
      "https://www.bing.com/th/id/OIP.WSsCa75YhSn91wK4_dc40wAAAA?w=250&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    rating: 4.99,
    name: "LocustAhamade",
    address: "No22.Ahakeshi.Ukland",
    price: 9952,
    id: "3",
  },
  {
    image:
      "https://www.bing.com/th/id/OIP.WSsCa75YhSn91wK4_dc40wAAAA?w=250&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    rating: 4.99,
    name: "LocustAhamade",
    address: "No22.Ahakeshi.Ukland",
    price: 9952,
    id: "4",
  },
  {
    image:
      "https://www.bing.com/th/id/OIP.WSsCa75YhSn91wK4_dc40wAAAA?w=250&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    rating: 4.99,
    name: "LocustAhamade",
    address: "No22.Ahakeshi.Ukland",
    price: 9952,
    id: "5",
  },
  {
    image:
      "https://www.bing.com/th/id/OIP.WSsCa75YhSn91wK4_dc40wAAAA?w=250&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    rating: 4.99,
    name: "LocustAhamade",
    address: "No22.Ahakeshi.Ukland",
    price: 9952,
    id: "6",
  },
  {
    image:
      "https://www.bing.com/th/id/OIP.WSsCa75YhSn91wK4_dc40wAAAA?w=250&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    rating: 4.99,
    name: "LocustAhamade",
    address: "No22.Ahakeshi.Ukland",
    price: 9952,
    id: "7",
  },
];
export const fakeLastProperties = [
  {
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msMpA.img",
    rating: 2.99,
    name: "LastAhamade",
    address: "No22.Ahakeshi.Ukland",
    price: 998852,
    id: "1",
  },
  {
    image:
      "https://owaohzxfnovawbdkaobd.supabase.co/storage/v1/object/public/cabin-images/0.14590366398775267-cabin-001.jpg",
    rating: 2.99,
    name: "LastAhamade",
    address: "No22.Ahakeshi.Ukland",
    price: 998852,
    id: "2",
  },
  {
    image:
      "https://owaohzxfnovawbdkaobd.supabase.co/storage/v1/object/public/cabin-images/0.3233334773127077-cabin-006.jpg",
    rating: 2.99,
    name: "LastAhamade",
    address: "No22.Ahakeshi.Ukland",
    price: 998852,
    id: "3",
  },
  {
    image:
      "https://owaohzxfnovawbdkaobd.supabase.co/storage/v1/object/public/cabin-images/0.47853521344088246-cabin-008.jpg",
    rating: 2.99,
    name: "LastAhamade",
    address: "No22.Ahakeshi.Ukland",
    price: 998852,
    id: "4",
  },
];

export const fakeUser = {
  name: "Laoskee",
  avatar: null,
  login: true,
};

export const featuredCards = [
  {
    title: "Featured 1",
    location: "Location 1",
    price: "$100",
    rating: 4.8,
    image: images.newYork,
    category: "house",
  },
  {
    title: "Featured 2",
    location: "Location 2",
    price: "$200",
    rating: 3,
    image: images.japan,
    category: "flat",
  },
];

export const categories = [
  { title: "All", category: "All" },
  { title: "Houses", category: "House" },
  { title: "Condos", category: "Condos" },
  { title: "Duplexes", category: "Duplexes" },
  { title: "Studios", category: "Studios" },
  { title: "Villas", category: "Villa" },
  { title: "Apartments", category: "Apartments" },
  { title: "Townhomes", category: "Townhomes" },
  { title: "Others", category: "Others" },
];

export const settings = [
  {
    title: "My Bookings",
    icon: icons.calendar,
  },
  {
    title: "Payments",
    icon: icons.wallet,
  },
  {
    title: "Profile",
    icon: icons.person,
  },
  {
    title: "Notifications",
    icon: icons.bell,
  },
  {
    title: "Security",
    icon: icons.shield,
  },
  {
    title: "Language",
    icon: icons.language,
  },
  {
    title: "Help Center",
    icon: icons.info,
  },
  {
    title: "Invite Friends",
    icon: icons.people,
  },
];

export const facilities = [
  {
    title: "Laundry",
    icon: icons.laundry,
  },
  {
    title: "Car Parking",
    icon: icons.carPark,
  },
  {
    title: "Sports Center",
    icon: icons.run,
  },
  {
    title: "Cutlery",
    icon: icons.cutlery,
  },
  {
    title: "Gym",
    icon: icons.dumbell,
  },
  {
    title: "Swimming pool",
    icon: icons.swim,
  },
  {
    title: "Wifi",
    icon: icons.wifi,
  },
  {
    title: "Pet Center",
    icon: icons.dog,
  },
];

export const gallery = [
  {
    id: 1,
    image: images.newYork,
  },
  {
    id: 2,
    image: images.japan,
  },
  {
    id: 3,
    image: images.newYork,
  },
  {
    id: 4,
    image: images.japan,
  },
  {
    id: 5,
    image: images.newYork,
  },
  {
    id: 6,
    image: images.japan,
  },
];
