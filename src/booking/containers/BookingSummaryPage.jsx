/*
	Generated on 08/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext } from 'react';
import { Button } from "@/commons/components";
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams";
import { HeaderContext } from "@/commons/components";

const BookingSummaryPage = props => {
  const { number, hotelId } = useParams();
  const [isLoading, setIsLoading] = useState({
    bookingSummary: false,
  });
  const [bookingData, setBookingData] = useState(null); // Tambahkan state untuk bookingData
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Booking Summary Page");
    const data = JSON.parse(localStorage.getItem('bookingFormData'));
    console.log('Booking Data:', data); // Debugging atau gunakan sesuai kebutuhan
    setBookingData(data); // Simpan data ke state
  }, []);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <>
          <Layouts.ViewContainerButtonLayout>
            <Link to={`/hotel/:bookingId/payment`}>
              <Button className="p-2" variant="primary">
                Payment
              </Button>
            </Link>
          </Layouts.ViewContainerButtonLayout>
        </>
      }
    >
      <div>
        <h3>Booking Summary</h3>
        <p>Check-In Date: {bookingData?.checkInDate || 'N/A'}</p>
        <p>Check-Out Date: {bookingData?.checkOutDate || 'N/A'}</p>
        <p>Number of Guests: {bookingData?.numberOfGuests || 'N/A'}</p>
      </div>
    </Layouts.ViewContainerLayout>
  );
};

export default BookingSummaryPage;