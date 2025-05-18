import React, { useEffect, useState, useContext } from "react";
import { Button } from "@/commons/components";
import * as Layouts from "@/commons/layouts";
import { useAuth } from "@/commons/auth";
import HotelCard from "../components/HotelCard";
import getDataHotel from "../services/getDataHotel";
import { HeaderContext } from "@/commons/components";

const HotelPage = () => {
  const { checkPermission } = useAuth();
  const { setTitle } = useContext(HeaderContext);

  const [isLoading, setIsLoading] = useState({ listHotel: false });
  const [dataHotel, setDataHotel] = useState([]); // <- langsung array

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, listHotel: true }));
        const result = await getDataHotel();
        console.log("📦 result from API:", result?.data);
        const hotelArray = result?.data?.data ?? [];
        setDataHotel(hotelArray);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading((prev) => ({ ...prev, listHotel: false }));
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("🔄 dataHotel updated:", dataHotel);
  }, [dataHotel]);

  useEffect(() => {
    setTitle("Hotel Page");
  }, []);

  return (
    <Layouts.ViewContainerLayout>
      <Layouts.ListContainerCardLayout
        title={"List Hotel"}
        singularName={"Hotel"}
        items={[dataHotel]}
        isLoading={isLoading.listHotel}
      >
        <HotelCard dataHotel={[dataHotel]} />
      </Layouts.ListContainerCardLayout>
    </Layouts.ViewContainerLayout>
  );
};

export default HotelPage;
