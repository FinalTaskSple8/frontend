/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const HotelCard = ({ searchHotelData }) => {
  const { checkPermission } = useAuth();
  const { name, location } = useParams();
  console.log("Data yang diterima di HotelCard:", searchHotelData);
  return (
    <Layouts.ListComponentCardLayout
      items={[searchHotelData]} // Pastikan ini adalah array langsung, bukan array di dalam array
      isSearchable
      itemsAttrs={[
        {
          id: "name",
          condition: "",
          label: "name",
          featureName: "name",
          editable: false,
        },
        {
          id: "location",
            condition: "",
            label: "location",
  		    featureName: "location",
            editable: false
        },
      ]}
      itemsEvents={(hotelItem) => []}
    />
  );
};



export default HotelCard;
