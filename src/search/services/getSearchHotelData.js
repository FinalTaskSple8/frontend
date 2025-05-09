import axios from "axios";

const getSearchHotelData = () => {
  return axios.get("http://localhost:3004/hotels").catch((error) => {
    console.error(error);
    throw new Error("Failed to fetch hotel data");
  });
};

export default getSearchHotelData;