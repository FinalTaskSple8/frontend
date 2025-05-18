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
import deleteRoom from '../services/deleteRoom'; // Tambahkan ini
import { notifySuccess, notifyError } from "@/commons/utils/toaster"; // Tambahkan ini

import * as Layouts from "@/commons/layouts";

const RoomCard = ({ roomData,
	}) => {
  const { checkPermission } = useAuth();
  const { hotelId } = useParams()
  console.log("hotelId", hotelId)
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this room?")) {
      deleteRoom(id)
        .then(() => {
          notifySuccess("Room successfully deleted!");
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
      items={roomData}
  	
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
        <Button
          key="Delete"
          type="button"
          variant="primary"
          onClick={() => handleDelete(roomItem.id)}
        >
          Delete
        </Button>,
  	]}
    />
  )	
};

export default RoomCard;
