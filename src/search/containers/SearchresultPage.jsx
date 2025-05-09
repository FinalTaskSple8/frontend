import React, { useEffect, useState, useContext } from "react";
import * as Layouts from "@/commons/layouts";
import { useSearchParams } from "react-router"; // Gunakan useSearchParams untuk membaca query string
import { HeaderContext } from "@/commons/components";
import HotelCard from "../components/HotelCard";
import getSearchHotelData from "../services/getSearchHotelData";

const SearchresultPage = (props) => {
  const [searchParams] = useSearchParams(); // Ambil parameter dari URL
  const name = searchParams.get("name") || ""; // Ambil nilai "name"
  const location = searchParams.get("location") || ""; // Ambil nilai "location"

  const { setTitle } = useContext(HeaderContext);
  const [isLoading, setIsLoading] = useState({ listHotel: false });
  const [searchHotelData, setSearchHotelData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, listHotel: true }));
        const { data: allHotels } = await getSearchHotelData(); // Ambil semua data hotel
        const filteredHotels = allHotels.filter(
          (hotel) =>
            hotel.name.toLowerCase().includes(name.toLowerCase()) &&
            hotel.location.toLowerCase().includes(location.toLowerCase())
        ); // Filter berdasarkan name dan location
		console.log(filteredHotels);
        setSearchHotelData(filteredHotels);
		
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      } finally {
        setIsLoading((prev) => ({ ...prev, listHotel: false }));
      }
    };
    fetchData();
  }, [name, location]); // Jalankan ulang jika parameter berubah

  useEffect(() => {
    setTitle("Search Result Page");
	console.log("searchHotelData diperbarui:", searchHotelData);
}, [searchHotelData]);
	console.log("searchHotelData yang akan di-render:", searchHotelData);
  return (
  <Layouts.ViewContainerLayout>
    {searchHotelData && searchHotelData.length > 0 ? (
      <Layouts.ListContainerCardLayout
        title={"List Hotel"}
        singularName={"Hotel"}
        items={[searchHotelData]}
        isLoading={isLoading.listHotel}
      >
        <HotelCard searchHotelData={searchHotelData} />
      </Layouts.ListContainerCardLayout>
    ) : (
      <p>Data hotel tidak ditemukan.</p> // Fallback jika data kosong
    )}
  </Layouts.ViewContainerLayout>
);
  
};

export default SearchresultPage;