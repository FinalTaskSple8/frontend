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
import deleteHotel from '../services/deleteHotel';
import { notifyError, notifySuccess } from '@/commons/utils/toaster';

import * as Layouts from "@/commons/layouts";

const HotelCard = ({ dataHotel,
		 

	}) => {
  const { checkPermission } = useAuth();
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this hotel?")) {
      deleteHotel(id)
        .then(() => {
          notifySuccess("Hotel successfully deleted!");
          window.location.reload();
          // Optionally, refresh the list or remove the deleted item from the UI
        })
        .catch((error) => {
          console.error("Error deleting hotel:", error);
          notifyError("Failed to delete hotel. Please try again.");
        });
    }
  };
  
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
        <Link to={`/manage-hotel/${hotelItem.id}/rooms`}>
          <Button
            size="sm"
            variant=
                "primary"
          >
            View Hotel
          </Button>
        </Link>,
        <Button
          key="Delete"
          type="button"
          variant="primary"
          onClick={() => handleDelete(hotelItem.id)}
        >
          Delete
        </Button>,
        
  	]}
    />
  )	
};

export default HotelCard;
