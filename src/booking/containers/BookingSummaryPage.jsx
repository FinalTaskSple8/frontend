/*
	Generated on 08/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext } from 'react';
import { Button } from "@/commons/components";
import * as Layouts from '@/commons/layouts';
import { HeaderContext } from "@/commons/components";
import { useNavigate } from "react-router";

const BookingSummaryPage = () => {
  const [bookingSummary, setBookingSummary] = useState(null);

  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Booking Summary Page");

    // Ambil data booking dari localStorage
    const data = JSON.parse(localStorage.getItem('bookingSummary'));
    console.log('bookingSummary', data);
    setBookingSummary(data);
  }, []);

  const roomUpgrade = () => {
    console.log("Room upgrade clicked");
  };

  const additionalServices = () => {
    console.log("Additional services clicked");
  };

  const earlyCheckInOut = () => {
    console.log("Early Check-In/Out clicked");
  };

  const cancelBooking = () => {
    console.log("Cancel booking clicked");
  };
  const goToPayment = () => {
  if (bookingSummary?.hotelId && bookingSummary?.roomId && bookingSummary?.bookingId) {
    navigate(`/hotel/${bookingSummary.hotelId}/rooms/${bookingSummary.roomId}/booking/${bookingSummary.bookingId}/payment`, {
      state: { bookingSummary }
    });
  } else {
    console.warn("Booking info is incomplete.");
  }
};
console.log('bookingSummary', bookingSummary);
  return (
    <Layouts.DetailComponentLayout
      item={bookingSummary}
      itemsAttrs={[
        {
          id: "hotelId",
          condition: "",
          label: "hotelId",
          featureName: "hotelId",
        },
        {
          id: "checkOutDate",
          condition: "",
          label: "checkOutDate",
          featureName: "checkOutDate",
        },
        {
          id: "checkInDate",
          condition: "",
          label: "checkInDate",
          featureName: "checkInDate",
        },
        {
          id: "totalPrice",
          condition: "",
          label: "totalPrice",
          featureName: "totalPrice",
        },
        {
          id: "status",
          condition: "",
          label: "status",
          featureName: "status",
        },
        {
          id: "bookingId",
          condition: "",
          label: "bookingId",
          featureName: "bookingId",
        },
        {
          id: "upgradedRoomType",
          condition: "",
          label: "upgradedRoomType",
          featureName: "upgradedRoomType",
        },
        {
          id: "additionalServices",
          condition: "",
          label: "additionalServices",
          featureName: "additionalServices",
        },
        {
          id: "earlyCheckIn",
          condition: "",
          label: "earlyCheckIn",
          featureName: "earlyCheckIn",
        },
        {
          id: "lateCheckOut",
          condition: "",
          label: "lateCheckOut",
          featureName: "lateCheckOutFee",
        },
      ]}
      itemsEvents={[
        <Button
          key="cancel"
          variant="secondary"
          onClick={cancelBooking}
        >
          Cancel Booking
        </Button>,
        <Button
          key="payment"
          variant="primary"
          onClick={goToPayment}
        >
          Proceed to Payment
        </Button>
      ]}
      itemsModals={[]}
    />
  );
};

export default BookingSummaryPage;
