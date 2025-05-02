/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const invalidTable = ({ searchHotelData,
	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[searchHotelData]}
  	  isSearchable
  	  itemsAttrs={[
          {
            id: "namaHotel",
            condition: "",
            label: "NamaHotel",
  		  featureName: "name",
            editable: false
          }
  ,
          {
            id: "hargaHotel",
            condition: "",
            label: "HargaHotel",
  		  featureName: "price",
            editable: false
          }
  ,
          {
            id: "hotelPictureUrl",
            condition: "",
            label: "HotelPictureUrl",
  		  featureName: "invalid",
            editable: false
          }
  ,
          {
            id: "lokasiHotel",
            condition: "",
            label: "LokasiHotel",
  		  featureName: "location",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default invalidTable;
