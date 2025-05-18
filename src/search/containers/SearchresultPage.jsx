import React, { useEffect, useState, useContext } from "react";
import * as Layouts from "@/commons/layouts";
import { useSearchParams } from "react-router"; // Gunakan useSearchParams untuk membaca query string
import { HeaderContext } from "@/commons/components";
import HotelCard from "../components/HotelCard";
import getSearchHotelData from "../services/getSearchHotelData";
import { useLocation } from "react-router"; // Import useLocation untuk mendapatkan state dari navigasi

const SearchresultPage = (props) => {
  const location = useLocation(); 
  const searchResults = location.state?.searchResults || []; // Get search results from state

  const { setTitle } = useContext(HeaderContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTitle("Search Result Page");
  }, []);

  return (
    <Layouts.ViewContainerLayout>
      {searchResults.length > 0 ? (
        <Layouts.ListContainerCardLayout
          title={"List Hotel"}
          singularName={"Hotel"}
          items={[searchResults]}
          isLoading={isLoading}
        >
          <HotelCard searchHotelData={searchResults} />
        </Layouts.ListContainerCardLayout>
      ) : (
        <p>Data hotel tidak ditemukan.</p>
      )}
    </Layouts.ViewContainerLayout>
  );
};
export default SearchresultPage;