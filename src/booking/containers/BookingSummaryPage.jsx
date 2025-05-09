/*
	Generated on 08/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext } from 'react';
import { Button } from "@/commons/components";
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { HeaderContext } from "@/commons/components";

const BookingSummaryPage = () => {
  const [bookingSummary, setBookingSummary] = useState(null);
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Booking Summary Page");

    // Ambil data booking dari localStorage
    const data = JSON.parse(localStorage.getItem('bookingSummary'));
    setBookingSummary(data);
  }, []);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <Layouts.ViewContainerButtonLayout>
          <Link to={`/hotel/:bookingId/payment`}>
            <Button className="p-2" variant="primary">
              Payment
            </Button>
          </Link>
        </Layouts.ViewContainerButtonLayout>
      }
    >
      <div>
        <h3>Booking Summary</h3>
        <p>Hotel Name: {bookingSummary?.hotelName || 'N/A'}</p>
        <p>Hotel Location: {bookingSummary?.hotelLocation || 'N/A'}</p>
        <p>Total Price: {bookingSummary?.totalPrice || 'N/A'}</p>
        <p>Check-In Date: {bookingSummary?.checkInDate || 'N/A'}</p>
        <p>Check-Out Date: {bookingSummary?.checkOutDate || 'N/A'}</p>
        <p>Number of Guests: {bookingSummary?.numberOfGuests || 'N/A'}</p>
      </div>
    </Layouts.ViewContainerLayout>
  );
};

export default BookingSummaryPage;