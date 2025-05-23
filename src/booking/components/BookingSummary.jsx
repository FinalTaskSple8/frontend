/*
	Generated on 22/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import cancelBooking from '../services/cancelBooking';
import { useParams } from "@/commons/hooks/useParams";
import * as Layouts from "@/commons/layouts";


const BookingSummary = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    console.log("booking DATA", data);
  	const { hotelId, number, bookingId } = useParams();
    const cancelBooking = async () => {
      await cancelBooking({
      });
  	navigate('/hotel/:hotelId/rooms/:number/booking');
    }
    const enrichedData = {
      ...data,
      hotelId: data.hotelData?.id,
      hotelName: data.hotelData?.name,
      hotelLocation: data.hotelData?.location,
    };
  
  
  return (
  <Layouts.DetailComponentLayout
    item={enrichedData}
    itemsAttrs={[
      {
        id: "hotelName",
        condition: "",
        label: "Hotel Name",
        featureName: "hotelName",
      },
      {
        id: "hotelLocation",
        condition: "",
        label: "Hotel Location",
        featureName: "hotelLocation",
      },
      {
        id: "checkInDate",
        condition: "",
        label: "Check-In Date",
        featureName: "checkInDate",
      },
      {
        id: "checkOutDate",
        condition: "",
        label: "Check-Out Date",
        featureName: "checkOutDate",
      },
      {
        id: "numberOfGuests",
        condition: "",
        label: "Number of Guests",
        featureName: "numberOfGuests",
      },
      {
        id: "totalPrice",
        condition: "",
        label: "Total Price",
        featureName: "totalPrice",
      },
      {
        id: "status",
        condition: "",
        label: "Status",
        featureName: "status",
      },
      {
        id: "bookingId",
        condition: "",
        label: "Booking ID",
        featureName: "id",
      },
    ]}
    itemsEvents={[
      <Button variant="secondary" onClick={ () => navigate(`/hotel/${hotelId}/rooms/${number}/booking/summary/${bookingId}/early-check-in-late-check-out`)}>
        Early Check In/Out
      </Button>,
      <Button variant="secondary" onClick={() => cancelBooking()}>
        Cancel Booking
      </Button>
    ]}
    itemsModals={[]}
  />
);

};

export default BookingSummary;
