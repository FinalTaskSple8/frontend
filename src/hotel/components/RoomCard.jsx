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

const RoomCard = ({ roomData,
		 

	}) => {
  const { checkPermission } = useAuth();
  const { hotelId } = useParams()
  
  return (
    <Layouts.ListComponentCardLayout
      items={[roomData]}
  	
  	itemsAttrs={[
          {
            id: "number",
            condition: "",
            label: "number",
  		  featureName: "number",
            editable: false
          }
  ,
          {
            id: "type",
            condition: "",
            label: "type",
  		  featureName: "type",
            editable: false
          }
  ,
          {
            id: "price",
            condition: "",
            label: "price",
  		  featureName: "price",
            editable: false
          }
  ,
          {
            id: "isAvailable",
            condition: "",
            label: "isAvailable",
  		  featureName: "isAvailable",
            editable: false
          }
  ]}
      itemsEvents={(roomItem) => [
        
        <Link to={`/hotel/${roomItem.hotelId}/rooms/${roomItem.number}/booking`}>
          <Button
            size="sm"
            variant=
                "primary"
          >
            Book Room
          </Button>
        </Link>
        
        
  	]}
    />
  )	
};

export default RoomCard;
