const GOOGLE_API_KEY = "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY";

export const getMapPreview = (lat, lng) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;

  return imagePreviewUrl;
};

export const generateRandomCoordinates = () => {
  let latCenter = 6.5244;
  let lngCenter = 3.3792;
  let latRange = 0.1;
  let lngRange = 0.1;

  const minLat = latCenter - latRange;
  const maxLat = latCenter + latRange;
  const minLng = lngCenter - lngRange;
  const maxLng = lngCenter + lngRange;

  // Generate random latitude and longitude within the defined range
  const latitude = (Math.random() * (maxLat - minLat) + minLat).toFixed(6);
  const longitude = (Math.random() * (maxLng - minLng) + minLng).toFixed(6);

  return {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude),
  };
};

function generateRandomAddress() {
  const streetNumbers = Array.from({ length: 1000 }, (_, i) => i + 1);
  const streetNames = [
    "Main St",
    "Elm St",
    "Oak St",
    "Pine St",
    "Maple Ave",
    "Cedar Ave",
    "Birch Rd",
    "Willow Rd",
  ];
  const cities = [
    "Springfield",
    "Rivertown",
    "Greenfield",
    "Hillview",
    "Fairview",
    "Sunnydale",
    "Brooklyn",
    "Lakeside",
  ];
  const states = ["CA", "NY", "TX", "FL", "WA", "IL", "PA", "OH"];
  const countries = [
    "USA",
    "Canada",
    "UK",
    "Australia",
    "Germany",
    "India",
    "Japan",
  ];
  const zipCodes = Array.from({ length: 10000 }, (_, i) => i + 10000);

  const randomElement = (array) =>
    array[Math.floor(Math.random() * array.length)];

  const streetNumber = randomElement(streetNumbers);
  const streetName = randomElement(streetNames);
  const city = randomElement(cities);
  const state = randomElement(states);
  const country = randomElement(countries);
  const zipCode = randomElement(zipCodes);

  return `${streetNumber} ${streetName}, ${city}, ${state}, ${zipCode}, ${country}`;
}

export const getAddress = async (lat, lng) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("failed to fetch address. Please try again");
  }

  return data?.results[0]?.formatted_address
    ? data?.results[0]?.formatted_address
    : generateRandomAddress();
};
