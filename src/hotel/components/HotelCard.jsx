/*
	Generated on 08/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const HotelCard = ({ dataHotel,
		 

	}) => {
  const { checkPermission } = useAuth();
  const { hotelId } = useParams()
  
  return (
    <Layouts.ListComponentCardLayout
      items={[dataHotel]}
  	
  	itemsAttrs={[
          {
            id: "name",
            condition: "",
            label: "name",
  		  featureName: "name",
            editable: false
          }
  ,
          {
            id: "location",
            condition: "",
            label: "location",
  		      featureName: "location",
            editable: false
          }
  ]}
      itemsEvents={(hotelItem) => [
        console.log("hotelItem", hotelItem),
        <Link to={`/hotel/${hotelItem.id}/rooms`}>
          <Button
            size="sm"
            variant=
                "primary"
          >
            View Hotel
          </Button>
        </Link>
        
        
  	]}
    />
  )	
};

export default HotelCard;
