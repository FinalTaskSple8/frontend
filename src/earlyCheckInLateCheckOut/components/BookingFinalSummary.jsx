/*
	Generated on 22/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';


import cancelBooking from '@/booking/services/cancelBooking';

import * as Layouts from "@/commons/layouts";


const BookingFinalSummary = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  	
    // const cancelBooking = async () => {
    //   await cancelBooking({
    //   });
  	// navigate('/hotel/:hotelId/rooms/:number/booking');
    // }
    
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "hotelId",
          condition: "",
          label: "hotelId",
          featureName: "hotelId",
        }
        ,
        {
          id: "checkOutDate",
          condition: "",
          label: "checkOutDate",
          featureName: "checkOutDate",
        }
        ,
        {
          id: "checkInDate",
          condition: "",
          label: "checkInDate",
          featureName: "checkInDate",
        }
        ,
        {
          id: "totalPrice",
          condition: "",
          label: "totalPrice",
          featureName: "totalPrice",
        }
        ,
        {
          id: "status",
          condition: "",
          label: "status",
          featureName: "status",
        }
        ,
        {
          id: "bookingId",
          condition: "",
          label: "bookingId",
          featureName: "bookingId",
        }
        ,
        {
          id: "earlyCheckIn",
          condition: "",
          label: "Early CheckIn",
          featureName: "earlyCheckIn",
        }
        ,
        {
          id: "lateCheckOut",
          condition: "",
          label: "Late CheckOut",
          featureName: "lateCheckOut",
        }
        ,
        {
          id: "earlyCheckInFee",
          condition: "",
          label: "Early CheckIn Fee",
          featureName: "earlyCheckInFee",
        }
        ,
        {
          id: "lateCheckOutFee",
          condition: "",
          label: "Late CheckOut Fee",
          featureName: "lateCheckOutFee",
        }
        
      ]}
      itemsEvents={[
            <Button
              variant="secondary"
              onClick={() => cancelBooking()}
            >
              Cancel Booking
            </Button>
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default BookingFinalSummary;
