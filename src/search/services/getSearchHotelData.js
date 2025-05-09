import axios from "axios";

const getSearchHotelData = () => {
  return axios.get("https://json-server-production-cbaa.up.railway.app/hotels").catch((error) => {
    console.error(error);
    throw new Error("Failed to fetch hotel data");
  });
};

export default getSearchHotelData;